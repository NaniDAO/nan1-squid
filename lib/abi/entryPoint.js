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
exports.Contract = exports.functions = exports.events = exports.abi = void 0;
const ethers = __importStar(require("ethers"));
const abi_support_1 = require("./abi.support");
const entryPoint_abi_1 = require("./entryPoint.abi");
exports.abi = new ethers.Interface(entryPoint_abi_1.ABI_JSON);
exports.events = {
    AccountDeployed: new abi_support_1.LogEvent(exports.abi, '0xd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d'),
    BeforeExecution: new abi_support_1.LogEvent(exports.abi, '0xbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972'),
    Deposited: new abi_support_1.LogEvent(exports.abi, '0x2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4'),
    SignatureAggregatorChanged: new abi_support_1.LogEvent(exports.abi, '0x575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d'),
    StakeLocked: new abi_support_1.LogEvent(exports.abi, '0xa5ae833d0bb1dcd632d98a8b70973e8516812898e19bf27b70071ebc8dc52c01'),
    StakeUnlocked: new abi_support_1.LogEvent(exports.abi, '0xfa9b3c14cc825c412c9ed81b3ba365a5b459439403f18829e572ed53a4180f0a'),
    StakeWithdrawn: new abi_support_1.LogEvent(exports.abi, '0xb7c918e0e249f999e965cafeb6c664271b3f4317d296461500e71da39f0cbda3'),
    UserOperationEvent: new abi_support_1.LogEvent(exports.abi, '0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f'),
    UserOperationRevertReason: new abi_support_1.LogEvent(exports.abi, '0x1c4fada7374c0a9ee8841fc38afe82932dc0f8e69012e927f061a8bae611a201'),
    Withdrawn: new abi_support_1.LogEvent(exports.abi, '0xd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb'),
};
exports.functions = {
    SIG_VALIDATION_FAILED: new abi_support_1.Func(exports.abi, '0x8f41ec5a'),
    _validateSenderAndPaymaster: new abi_support_1.Func(exports.abi, '0x957122ab'),
    addStake: new abi_support_1.Func(exports.abi, '0x0396cb60'),
    balanceOf: new abi_support_1.Func(exports.abi, '0x70a08231'),
    depositTo: new abi_support_1.Func(exports.abi, '0xb760faf9'),
    deposits: new abi_support_1.Func(exports.abi, '0xfc7e286d'),
    getDepositInfo: new abi_support_1.Func(exports.abi, '0x5287ce12'),
    getNonce: new abi_support_1.Func(exports.abi, '0x35567e1a'),
    getSenderAddress: new abi_support_1.Func(exports.abi, '0x9b249f69'),
    getUserOpHash: new abi_support_1.Func(exports.abi, '0xa6193531'),
    handleAggregatedOps: new abi_support_1.Func(exports.abi, '0x4b1d7cf5'),
    handleOps: new abi_support_1.Func(exports.abi, '0x1fad948c'),
    incrementNonce: new abi_support_1.Func(exports.abi, '0x0bd28e3b'),
    innerHandleOp: new abi_support_1.Func(exports.abi, '0x1d732756'),
    nonceSequenceNumber: new abi_support_1.Func(exports.abi, '0x1b2e01b8'),
    simulateHandleOp: new abi_support_1.Func(exports.abi, '0xd6383f94'),
    simulateValidation: new abi_support_1.Func(exports.abi, '0xee219423'),
    unlockStake: new abi_support_1.Func(exports.abi, '0xbb9fe6bf'),
    withdrawStake: new abi_support_1.Func(exports.abi, '0xc23a5cea'),
    withdrawTo: new abi_support_1.Func(exports.abi, '0x205c2878'),
};
class Contract extends abi_support_1.ContractBase {
    SIG_VALIDATION_FAILED() {
        return this.eth_call(exports.functions.SIG_VALIDATION_FAILED, []);
    }
    balanceOf(account) {
        return this.eth_call(exports.functions.balanceOf, [account]);
    }
    deposits(arg0) {
        return this.eth_call(exports.functions.deposits, [arg0]);
    }
    getDepositInfo(account) {
        return this.eth_call(exports.functions.getDepositInfo, [account]);
    }
    getNonce(sender, key) {
        return this.eth_call(exports.functions.getNonce, [sender, key]);
    }
    getUserOpHash(userOp) {
        return this.eth_call(exports.functions.getUserOpHash, [userOp]);
    }
    nonceSequenceNumber(arg0, arg1) {
        return this.eth_call(exports.functions.nonceSequenceNumber, [arg0, arg1]);
    }
}
exports.Contract = Contract;
