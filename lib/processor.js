"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processor = exports.chain = void 0;
const constants_1 = require("./constants");
const accountsAbi = __importStar(require("./abi/accounts"));
const evm_processor_1 = require("@subsquid/evm-processor");
const archive_registry_1 = require("@subsquid/archive-registry");
const util_internal_1 = require("@subsquid/util-internal");
exports.chain = 'arbitrum';
exports.processor = new evm_processor_1.EvmBatchProcessor()
    .setGateway((0, archive_registry_1.lookupArchive)(exports.chain))
    .setRpcEndpoint({
    // set RPC endpoint in .env
    url: (0, util_internal_1.assertNotNull)(process.env.RPC_ETH_HTTP, 'RPC_ETH_HTTP is not set'),
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
    callTo: [constants_1.ACCOUNTS_ADDRESS],
    transaction: true,
});
