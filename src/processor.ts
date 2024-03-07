import { ACCOUNTS_ADDRESS, ENTRYPOINT_ADDRESS } from "./constants";
import * as accountsAbi from './abi/accounts'
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
    url: assertNotNull(process.env.RPC_ETH_HTTP, 'RPC_ETH_HTTP is not set'),
    rateLimit: 10
  })
  .setFinalityConfirmation(75) // 15 mins to finality
  .setBlockRange({ from: 18597775 })
  .setFields({
    transaction: {
      chainId: true,
      from: true,
      to: true,
      sighash: true,
      hash: true,
      value: true,
    },
    trace: {
      callInput: true,
      callFrom: true,
      callTo: true,
      callSighash: true,
      callResultOutput: true,
      callValue: true,
    }
  })
  .addTrace({
    type: ['call'],
    callSighash: [accountsAbi.functions.createAccount.sighash],
    callTo: [ACCOUNTS_ADDRESS],
    transaction: true,
  })

  export type Fields = EvmBatchProcessorFields<typeof processor>
  export type Context = DataHandlerContext<Store, Fields>
  export type Block = BlockHeader<Fields>
  export type Log = _Log<Fields>
  export type Transaction = _Transaction<Fields>