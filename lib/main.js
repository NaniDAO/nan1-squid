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
const entrypointAbi = __importStar(require("./abi/entryPoint"));
const model_1 = require("./model");
const processor_1 = require("./processor");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
let factoryAccounts;
processor_1.processor.run(new typeorm_store_1.TypeormDatabase({ supportHotBlocks: true, stateSchema: 'processor' }), async (ctx) => {
    if (!factoryAccounts) {
        factoryAccounts = await ctx.store.findBy(model_1.Account, {}).then((q) => new Set(q.map((i) => i.id)));
    }
    let accounts = [];
    let userOps = [];
    for (let block of ctx.blocks) {
        for (let trace of block.traces) {
            if (trace.type === 'call') {
                // @ts-expect-error
                const { to, input, sighash } = trace.action;
                if (sighash === accountsAbi.functions.createAccount.sighash) {
                    ctx.log.info(`Processing createAccount ${trace.transaction.hash}`);
                    const [owner, salt] = accountsAbi.functions.createAccount.decode(input);
                    // @ts-expect-error
                    const account = accountsAbi.functions.createAccount.decodeResult(trace.result.output);
                    ctx.log.info(`Processing createAccount ${account} factory ${to.toLowerCase()}`);
                    accounts.push({
                        id: (0, utils_1.getAccountId)(account, processor_1.chain),
                        factory: to.toLowerCase(),
                        address: account.toLowerCase(),
                        owner: owner.toLowerCase(),
                        salt: salt.toLowerCase(),
                        txHash: trace.transaction.hash,
                        blockTimestamp: (0, utils_1.convertTimestampMilliToSeconds)(block.header.timestamp),
                    });
                }
            }
        }
        for (let log of block.logs) {
            if (log.address.toLowerCase() === constants_1.ENTRYPOINTS_ADDRESSES['0.6.0'] || log.address.toLowerCase() === constants_1.ENTRYPOINTS_ADDRESSES['0.7.0']) {
                if (log.topics[0] === entrypointAbi.events.UserOperationEvent.topic) {
                    const userOp = entrypointAbi.events.UserOperationEvent.decode(log);
                    if (factoryAccounts.has((0, utils_1.getAccountId)(userOp.sender, processor_1.chain))) {
                        ctx.log.info({ userOp }, `Processing user operation log ${userOp.userOpHash}`);
                        userOps.push(new model_1.UserOperation({
                            id: userOp.userOpHash.toLowerCase(),
                            userOpHash: userOp.userOpHash.toLowerCase(),
                            sender: userOp.sender.toLowerCase(),
                            nonce: userOp.nonce,
                            paymaster: userOp.paymaster.toLowerCase(),
                            actualGasCost: userOp.actualGasCost,
                            actualGasUsed: userOp.actualGasUsed,
                            success: userOp.success,
                            txHash: log.transaction.hash.toLowerCase(),
                            timestamp: (0, utils_1.convertTimestampMilliToSeconds)(block.header.timestamp),
                        }));
                    }
                }
            }
        }
    }
    createAccounts(ctx, accounts);
    ctx.log.info({ userOps }, `Inserting ${userOps.length} user operations`);
    await ctx.store.insert(userOps);
});
async function createAccounts(ctx, accountsData) {
    let accountsMap = new Map();
    for (let a of accountsData) {
        let account = new model_1.Account(a);
        accountsMap.set(account.id, account);
        factoryAccounts.add(account.id);
    }
    const accountsArray = Array.from(accountsMap.values());
    ctx.log.debug(`Inserting ${accountsArray.length} accounts`);
    await ctx.store.upsert(accountsArray);
}
