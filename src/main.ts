import { TypeormDatabase } from '@subsquid/typeorm-store'

import * as accountsAbi from './abi/accounts'
import { Account } from './model'
import { chain, processor } from './processor';
import { convertTimestampMilliToSeconds } from './utils';

processor.run(new TypeormDatabase({ supportHotBlocks: true, stateSchema: 'processor' }), async ctx => {
    const accounts = new Map()

    for (let block of ctx.blocks) {
      for (let trace of block.traces) {
        if (trace.type === 'call') {
          // @ts-expect-error
          const { from, to, value, input, sighash } = trace.action;
          ctx.log.info({ from, to, value, input, sighash }, `Processing call ${trace.transaction.hash}`)

          if (sighash === accountsAbi.functions.createAccount.sighash) {
            const [owner, salt] = accountsAbi.functions.createAccount.decode(input)
            ctx.log.info({ owner, salt }, `Processing createAccount ${trace.transaction.hash}`)
            // @ts-expect-error
            ctx.log.info({ output: trace.result.output }, `Processing createAccount ${trace.transaction.hash}`)
            // @ts-expect-error
            const account = accountsAbi.functions.createAccount.decodeResult(trace.result.output)
            
            ctx.log.info({ account }, `Processing createAccount ${trace.transaction.hash}`)

            accounts.set(account.toLowerCase() + '-' + chain, new Account( {
              id: account.toLowerCase() + '-' + chain,
              address: account.toLowerCase(),
              owner: owner.toLowerCase(),
              salt: salt.toLowerCase(),
              txHash: trace.transaction.hash,
              blockTimestamp: convertTimestampMilliToSeconds(block.header.timestamp),
            }))
            ctx.log.info({ account }, `Processed createAccount ${trace.transaction.hash}`)
          }
        }
      }
    }

      await ctx.store.upsert(Array.from(accounts.values())).then(() => {
      ctx.log.info('Inserted accounts')
    })
})

