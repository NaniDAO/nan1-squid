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
exports.Contract = exports.functions = exports.abi = void 0;
const ethers = __importStar(require("ethers"));
const abi_support_1 = require("./abi.support");
const accounts_abi_1 = require("./accounts.abi");
exports.abi = new ethers.Interface(accounts_abi_1.ABI_JSON);
exports.functions = {
    createAccount: new abi_support_1.Func(exports.abi, '0xf14ddffc'),
    get: new abi_support_1.Func(exports.abi, '0x62a2cf0c'),
    getAddress: new abi_support_1.Func(exports.abi, '0x21f8a721'),
    implementation: new abi_support_1.Func(exports.abi, '0x5c60da1b'),
    initCodeHash: new abi_support_1.Func(exports.abi, '0xdb4c545e'),
    set: new abi_support_1.Func(exports.abi, '0xc3e39250'),
};
class Contract extends abi_support_1.ContractBase {
    get(selector) {
        return this.eth_call(exports.functions.get, [selector]);
    }
    getAddress(salt) {
        return this.eth_call(exports.functions.getAddress, [salt]);
    }
    implementation() {
        return this.eth_call(exports.functions.implementation, []);
    }
    initCodeHash() {
        return this.eth_call(exports.functions.initCodeHash, []);
    }
}
exports.Contract = Contract;
