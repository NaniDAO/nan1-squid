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
const account_abi_1 = require("./account.abi");
exports.abi = new ethers.Interface(account_abi_1.ABI_JSON);
exports.events = {
    OwnershipHandoverCanceled: new abi_support_1.LogEvent(exports.abi, "0xfa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92"),
    OwnershipHandoverRequested: new abi_support_1.LogEvent(exports.abi, "0xdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d"),
    OwnershipTransferred: new abi_support_1.LogEvent(exports.abi, "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"),
    Upgraded: new abi_support_1.LogEvent(exports.abi, "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b"),
};
exports.functions = {
    addDeposit: new abi_support_1.Func(exports.abi, "0x4a58db19"),
    cancelOwnershipHandover: new abi_support_1.Func(exports.abi, "0x54d1f13d"),
    completeOwnershipHandover: new abi_support_1.Func(exports.abi, "0xf04e283e"),
    delegateExecute: new abi_support_1.Func(exports.abi, "0xb10cc728"),
    eip712Domain: new abi_support_1.Func(exports.abi, "0x84b0196e"),
    entryPoint: new abi_support_1.Func(exports.abi, "0xb0d691fe"),
    execute: new abi_support_1.Func(exports.abi, "0xb61d27f6"),
    executeBatch: new abi_support_1.Func(exports.abi, "0x34fcd5be"),
    getDeposit: new abi_support_1.Func(exports.abi, "0xc399ec88"),
    initialize: new abi_support_1.Func(exports.abi, "0xc4d66de8"),
    isValidSignature: new abi_support_1.Func(exports.abi, "0x1626ba7e"),
    owner: new abi_support_1.Func(exports.abi, "0x8da5cb5b"),
    ownershipHandoverExpiresAt: new abi_support_1.Func(exports.abi, "0xfee81cf4"),
    proxiableUUID: new abi_support_1.Func(exports.abi, "0x52d1902d"),
    renounceOwnership: new abi_support_1.Func(exports.abi, "0x715018a6"),
    requestOwnershipHandover: new abi_support_1.Func(exports.abi, "0x25692962"),
    storageLoad: new abi_support_1.Func(exports.abi, "0xcb0fec1f"),
    storageStore: new abi_support_1.Func(exports.abi, "0x125b14e5"),
    transferOwnership: new abi_support_1.Func(exports.abi, "0xf2fde38b"),
    upgradeTo: new abi_support_1.Func(exports.abi, "0x3659cfe6"),
    upgradeToAndCall: new abi_support_1.Func(exports.abi, "0x4f1ef286"),
    validateUserOp: new abi_support_1.Func(exports.abi, "0x3a871cdd"),
    withdrawDepositTo: new abi_support_1.Func(exports.abi, "0x4d44560d"),
};
class Contract extends abi_support_1.ContractBase {
    eip712Domain() {
        return this.eth_call(exports.functions.eip712Domain, []);
    }
    entryPoint() {
        return this.eth_call(exports.functions.entryPoint, []);
    }
    getDeposit() {
        return this.eth_call(exports.functions.getDeposit, []);
    }
    isValidSignature(hash, signature) {
        return this.eth_call(exports.functions.isValidSignature, [hash, signature]);
    }
    owner() {
        return this.eth_call(exports.functions.owner, []);
    }
    ownershipHandoverExpiresAt(pendingOwner) {
        return this.eth_call(exports.functions.ownershipHandoverExpiresAt, [pendingOwner]);
    }
    proxiableUUID() {
        return this.eth_call(exports.functions.proxiableUUID, []);
    }
    storageLoad(storageSlot) {
        return this.eth_call(exports.functions.storageLoad, [storageSlot]);
    }
}
exports.Contract = Contract;
