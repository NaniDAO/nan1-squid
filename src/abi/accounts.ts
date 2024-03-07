import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './accounts.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    createAccount: new Func<[owner: string, salt: string], {owner: string, salt: string}, string>(
        abi, '0xf14ddffc'
    ),
    get: new Func<[selector: string], {selector: string}, string>(
        abi, '0x62a2cf0c'
    ),
    getAddress: new Func<[salt: string], {salt: string}, string>(
        abi, '0x21f8a721'
    ),
    implementation: new Func<[], {}, string>(
        abi, '0x5c60da1b'
    ),
    initCodeHash: new Func<[], {}, string>(
        abi, '0xdb4c545e'
    ),
    set: new Func<[selector: string, executor: string], {selector: string, executor: string}, []>(
        abi, '0xc3e39250'
    ),
}

export class Contract extends ContractBase {

    get(selector: string): Promise<string> {
        return this.eth_call(functions.get, [selector])
    }

    getAddress(salt: string): Promise<string> {
        return this.eth_call(functions.getAddress, [salt])
    }

    implementation(): Promise<string> {
        return this.eth_call(functions.implementation, [])
    }

    initCodeHash(): Promise<string> {
        return this.eth_call(functions.initCodeHash, [])
    }
}
