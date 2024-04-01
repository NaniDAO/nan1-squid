import { TypeormDatabase } from '@subsquid/typeorm-store'

import * as accountsAbi from './abi/accounts'
import * as entrypointAbi from './abi/entryPoint'

import { Account, UserOperation } from './model'
import { chain, processor, Context } from './processor';
import { convertTimestampMilliToSeconds, getAccountId } from './utils';
import { ENTRYPOINT_ADDRESS } from './constants';

let factoryAccounts: Set<string>

interface AccountData {
  id: string
  address: string
  owner: string
  salt: string
  txHash: string
  blockTimestamp: bigint
}

processor.run(new TypeormDatabase({ supportHotBlocks: true, stateSchema: 'processor' }), async ctx => {
    if (!factoryAccounts) {
      factoryAccounts = await ctx.store.findBy(Account, {}).then((q) => new Set(q.map((i) => i.id)))
  }

  let accounts: AccountData[] = []  
  let userOps: UserOperation[] = []

    for (let block of ctx.blocks) {
      for (let trace of block.traces) {
        if (trace.type === 'call') {
          // @ts-expect-error
          const { input, sighash } = trace.action;

          if (sighash === accountsAbi.functions.createAccount.sighash) {
            ctx.log.info(`Processing createAccount ${trace.transaction.hash}`)
            const [owner, salt] = accountsAbi.functions.createAccount.decode(input)
            // @ts-expect-error
            const account = accountsAbi.functions.createAccount.decodeResult(trace.result.output)
            
            ctx.log.info(`Processing createAccount ${trace.transaction.hash} ${account}`)
            accounts.push({
              id: getAccountId(account, chain),
              address: account.toLowerCase(),
              owner: owner.toLowerCase(),
              salt: salt.toLowerCase(),
              txHash: trace.transaction.hash,
              blockTimestamp: convertTimestampMilliToSeconds(block.header.timestamp),
            })
          }
        }
      }

      for (let log of block.logs) {
        if (log.address.toLowerCase() === ENTRYPOINT_ADDRESS) {
          if (log.topics[0] === entrypointAbi.events.UserOperationEvent.topic) {
            const userOp = entrypointAbi.events.UserOperationEvent.decode(log);
            if (factoryAccounts.has(getAccountId(userOp.sender, chain))) {
              ctx.log.info({ userOp }, `Processing user operation log ${userOp.userOpHash}`)

              userOps.push(new UserOperation({
                id: userOp.userOpHash.toLowerCase(),
                userOpHash: userOp.userOpHash.toLowerCase(),
                sender: userOp.sender.toLowerCase(),
                nonce: userOp.nonce,
                paymaster: userOp.paymaster.toLowerCase(),
                actualGasCost: userOp.actualGasCost,
                actualGasUsed: userOp.actualGasUsed,
                success: userOp.success,
                txHash: log.transaction.hash.toLowerCase(),
                timestamp: convertTimestampMilliToSeconds(block.header.timestamp),
              }))
            }
          }
        }
      }
    }

    createAccounts(ctx, accounts)
    ctx.log.info({ userOps }, `Inserting ${userOps.length} user operations`)
    await ctx.store.insert(userOps)
})


async function createAccounts(ctx: Context, accountsData: AccountData[]) {
  let accountsMap = new Map<string, Account>();

  for (let a of accountsData) {
      let account = new Account(a)
      accountsMap.set(account.id, account)
      factoryAccounts.add(account.id)
  }
  const accountsArray = Array.from(accountsMap.values());
  
  ctx.log.debug(`Inserting ${accountsArray.length} accounts`)
  await ctx.store.upsert(accountsArray)
}

