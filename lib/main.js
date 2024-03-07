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
const typeorm_store_1 = require("@subsquid/typeorm-store");
const accountsAbi = __importStar(require("./abi/accounts"));
const model_1 = require("./model");
const processor_1 = require("./processor");
processor_1.processor.run(new typeorm_store_1.TypeormDatabase({ supportHotBlocks: true, stateSchema: 'processor' }), async (ctx) => {
    const accounts = new Map();
    for (let block of ctx.blocks) {
        for (let trace of block.traces) {
            if (trace.type === 'call') {
                // @ts-expect-error
                const { from, to, value, input, sighash } = trace.action;
                ctx.log.info({ from, to, value, input, sighash }, `Processing call ${trace.transaction.hash}`);
                if (sighash === accountsAbi.functions.createAccount.sighash) {
                    const [owner, salt] = accountsAbi.functions.createAccount.decode(input);
                    ctx.log.info({ owner, salt }, `Processing createAccount ${trace.transaction.hash}`);
                    // @ts-expect-error
                    ctx.log.info({ output: trace.result.output }, `Processing createAccount ${trace.transaction.hash}`);
                    // @ts-expect-error
                    const account = accountsAbi.functions.createAccount.decodeResult(trace.result.output);
                    ctx.log.info({ account }, `Processing createAccount ${trace.transaction.hash}`);
                    accounts.set(account.toLowerCase() + '-' + 'eth-mainnet', new model_1.Account({
                        id: account.toLowerCase() + '-' + 'eth-mainnet',
                        address: account.toLowerCase(),
                        owner: owner.toLowerCase(),
                        salt: salt.toLowerCase(),
                        txHash: trace.transaction.hash,
                    }));
                    ctx.log.info({ account }, `Processed createAccount ${trace.transaction.hash}`);
                }
            }
        }
    }
    await ctx.store.upsert(Array.from(accounts.values())).then(() => {
        ctx.log.info('Inserted accounts');
    });
});
