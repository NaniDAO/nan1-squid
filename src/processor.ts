import { ACCOUNTS_ADDRESSES, ARBITRUM_START_BLOCK, ENTRYPOINTS_ADDRESSES } from "./constants";
import * as accountsAbi from './abi/accounts'
import * as entryPointAbi from './abi/entryPoint'
import * as accountAbi from './abi/account'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import { lookupArchive } from '@subsquid/archive-registry'
import { assertNotNull } from '@subsquid/util-internal';
import {Store} from '@subsquid/typeorm-store'

export const chain = 'arbitrum';

export const processor = new EvmBatchProcessor()
  .setGateway(lookupArchive(chain))
  .setRpcEndpoint({
    // set RPC endpoint in .env
    url: assertNotNull(process.env.RPC_ARBITRUM_ONE_HTTP, 'RPC_ARBITRUM_ONE_HTTP is not set'),
    rateLimit: 10
  })
  .setFinalityConfirmation(75) // 15 mins to finality
  .setBlockRange({ from: ARBITRUM_START_BLOCK })
  .setFields({
    transaction: {
      chainId: true,
      from: true,
      to: true,
      sighash: true,
      hash: true,
      value: true,
      input: true,
    },
    trace: {
      callInput: true,
      callFrom: true,
      callTo: true,
      callSighash: true,
      callResultOutput: true,
      callValue: true,
      revertReason: true,
    }
  })
  .addTrace({
    type: ['call'],
    callSighash: [accountsAbi.functions.createAccount.sighash],
    callTo: Object.values(ACCOUNTS_ADDRESSES),
    transaction: true,
    transactionLogs: true,
  })
  .addLog({
    address: Object.values(ENTRYPOINTS_ADDRESSES),
    topic0: [entryPointAbi.events.UserOperationEvent.topic, entryPointAbi.events.UserOperationRevertReason.topic],
    transaction: true,
  })
  .addLog({
    topic0: [accountAbi.events.OwnershipHandoverRequested.topic, accountAbi.events.OwnershipTransferred.topic, accountAbi.events.OwnershipHandoverCanceled.topic, accountAbi.events.Upgraded.topic],
    transaction: true,
   })

  export type Fields = EvmBatchProcessorFields<typeof processor>
  export type Context = DataHandlerContext<Store, Fields>
  export type Block = BlockHeader<Fields>
  export type Log = _Log<Fields>
  export type Transaction = _Transaction<Fields>
