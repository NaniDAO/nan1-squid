import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './account.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    OwnershipHandoverCanceled: new LogEvent<([pendingOwner: string] & {pendingOwner: string})>(
        abi, '0xfa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92'
    ),
    OwnershipHandoverRequested: new LogEvent<([pendingOwner: string] & {pendingOwner: string})>(
        abi, '0xdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d'
    ),
    OwnershipTransferred: new LogEvent<([oldOwner: string, newOwner: string] & {oldOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    addDeposit: new Func<[], {}, []>(
        abi, '0x4a58db19'
    ),
    cancelOwnershipHandover: new Func<[], {}, []>(
        abi, '0x54d1f13d'
    ),
    completeOwnershipHandover: new Func<[pendingOwner: string], {pendingOwner: string}, []>(
        abi, '0xf04e283e'
    ),
    delegateExecute: new Func<[delegate: string, data: string], {delegate: string, data: string}, string>(
        abi, '0xb10cc728'
    ),
    eip712Domain: new Func<[], {}, ([fields: string, name: string, version: string, chainId: bigint, verifyingContract: string, salt: string, extensions: Array<bigint>] & {fields: string, name: string, version: string, chainId: bigint, verifyingContract: string, salt: string, extensions: Array<bigint>})>(
        abi, '0x84b0196e'
    ),
    entryPoint: new Func<[], {}, string>(
        abi, '0xb0d691fe'
    ),
    execute: new Func<[target: string, value: bigint, data: string], {target: string, value: bigint, data: string}, string>(
        abi, '0xb61d27f6'
    ),
    executeBatch: new Func<[calls: Array<([target: string, value: bigint, data: string] & {target: string, value: bigint, data: string})>], {calls: Array<([target: string, value: bigint, data: string] & {target: string, value: bigint, data: string})>}, Array<string>>(
        abi, '0x34fcd5be'
    ),
    getDeposit: new Func<[], {}, bigint>(
        abi, '0xc399ec88'
    ),
    initialize: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xc4d66de8'
    ),
    isValidSignature: new Func<[hash: string, signature: string], {hash: string, signature: string}, string>(
        abi, '0x1626ba7e'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownershipHandoverExpiresAt: new Func<[pendingOwner: string], {pendingOwner: string}, bigint>(
        abi, '0xfee81cf4'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    requestOwnershipHandover: new Func<[], {}, []>(
        abi, '0x25692962'
    ),
    storageLoad: new Func<[storageSlot: string], {storageSlot: string}, string>(
        abi, '0xcb0fec1f'
    ),
    storageStore: new Func<[storageSlot: string, storageValue: string], {storageSlot: string, storageValue: string}, []>(
        abi, '0x125b14e5'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    upgradeTo: new Func<[newImplementation: string], {newImplementation: string}, []>(
        abi, '0x3659cfe6'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
    validateUserOp: new Func<[userOp: ([sender: string, nonce: bigint, initCode: string, callData: string, callGasLimit: bigint, verificationGasLimit: bigint, preVerificationGas: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: bigint, paymasterAndData: string, signature: string] & {sender: string, nonce: bigint, initCode: string, callData: string, callGasLimit: bigint, verificationGasLimit: bigint, preVerificationGas: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: bigint, paymasterAndData: string, signature: string}), userOpHash: string, missingAccountFunds: bigint], {userOp: ([sender: string, nonce: bigint, initCode: string, callData: string, callGasLimit: bigint, verificationGasLimit: bigint, preVerificationGas: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: bigint, paymasterAndData: string, signature: string] & {sender: string, nonce: bigint, initCode: string, callData: string, callGasLimit: bigint, verificationGasLimit: bigint, preVerificationGas: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: bigint, paymasterAndData: string, signature: string}), userOpHash: string, missingAccountFunds: bigint}, bigint>(
        abi, '0x3a871cdd'
    ),
    withdrawDepositTo: new Func<[to: string, amount: bigint], {to: string, amount: bigint}, []>(
        abi, '0x4d44560d'
    ),
}

export class Contract extends ContractBase {

    eip712Domain(): Promise<([fields: string, name: string, version: string, chainId: bigint, verifyingContract: string, salt: string, extensions: Array<bigint>] & {fields: string, name: string, version: string, chainId: bigint, verifyingContract: string, salt: string, extensions: Array<bigint>})> {
        return this.eth_call(functions.eip712Domain, [])
    }

    entryPoint(): Promise<string> {
        return this.eth_call(functions.entryPoint, [])
    }

    getDeposit(): Promise<bigint> {
        return this.eth_call(functions.getDeposit, [])
    }

    isValidSignature(hash: string, signature: string): Promise<string> {
        return this.eth_call(functions.isValidSignature, [hash, signature])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownershipHandoverExpiresAt(pendingOwner: string): Promise<bigint> {
        return this.eth_call(functions.ownershipHandoverExpiresAt, [pendingOwner])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    storageLoad(storageSlot: string): Promise<string> {
        return this.eth_call(functions.storageLoad, [storageSlot])
    }
}
