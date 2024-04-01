import * as ethers from "ethers";
import { LogEvent, Func, ContractBase } from "./abi.support";
import { ABI_JSON } from "./entryPoint.abi";

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
	AccountDeployed: new LogEvent<
		[userOpHash: string, sender: string, factory: string, paymaster: string] & {
			userOpHash: string;
			sender: string;
			factory: string;
			paymaster: string;
		}
	>(abi, "0xd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d"),
	BeforeExecution: new LogEvent<[]>(
		abi,
		"0xbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972",
	),
	Deposited: new LogEvent<
		[account: string, totalDeposit: bigint] & {
			account: string;
			totalDeposit: bigint;
		}
	>(abi, "0x2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4"),
	SignatureAggregatorChanged: new LogEvent<
		[aggregator: string] & { aggregator: string }
	>(abi, "0x575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d"),
	StakeLocked: new LogEvent<
		[account: string, totalStaked: bigint, unstakeDelaySec: bigint] & {
			account: string;
			totalStaked: bigint;
			unstakeDelaySec: bigint;
		}
	>(abi, "0xa5ae833d0bb1dcd632d98a8b70973e8516812898e19bf27b70071ebc8dc52c01"),
	StakeUnlocked: new LogEvent<
		[account: string, withdrawTime: bigint] & {
			account: string;
			withdrawTime: bigint;
		}
	>(abi, "0xfa9b3c14cc825c412c9ed81b3ba365a5b459439403f18829e572ed53a4180f0a"),
	StakeWithdrawn: new LogEvent<
		[account: string, withdrawAddress: string, amount: bigint] & {
			account: string;
			withdrawAddress: string;
			amount: bigint;
		}
	>(abi, "0xb7c918e0e249f999e965cafeb6c664271b3f4317d296461500e71da39f0cbda3"),
	UserOperationEvent: new LogEvent<
		[
			userOpHash: string,
			sender: string,
			paymaster: string,
			nonce: bigint,
			success: boolean,
			actualGasCost: bigint,
			actualGasUsed: bigint,
		] & {
			userOpHash: string;
			sender: string;
			paymaster: string;
			nonce: bigint;
			success: boolean;
			actualGasCost: bigint;
			actualGasUsed: bigint;
		}
	>(abi, "0x49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f"),
	UserOperationRevertReason: new LogEvent<
		[
			userOpHash: string,
			sender: string,
			nonce: bigint,
			revertReason: string,
		] & {
			userOpHash: string;
			sender: string;
			nonce: bigint;
			revertReason: string;
		}
	>(abi, "0x1c4fada7374c0a9ee8841fc38afe82932dc0f8e69012e927f061a8bae611a201"),
	Withdrawn: new LogEvent<
		[account: string, withdrawAddress: string, amount: bigint] & {
			account: string;
			withdrawAddress: string;
			amount: bigint;
		}
	>(abi, "0xd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb"),
};

export const functions = {
	SIG_VALIDATION_FAILED: new Func<[], {}, bigint>(abi, "0x8f41ec5a"),
	_validateSenderAndPaymaster: new Func<
		[initCode: string, sender: string, paymasterAndData: string],
		{ initCode: string; sender: string; paymasterAndData: string },
		[]
	>(abi, "0x957122ab"),
	addStake: new Func<
		[unstakeDelaySec: number],
		{ unstakeDelaySec: number },
		[]
	>(abi, "0x0396cb60"),
	balanceOf: new Func<[account: string], { account: string }, bigint>(
		abi,
		"0x70a08231",
	),
	depositTo: new Func<[account: string], { account: string }, []>(
		abi,
		"0xb760faf9",
	),
	deposits: new Func<
		[_: string],
		{},
		[
			deposit: bigint,
			staked: boolean,
			stake: bigint,
			unstakeDelaySec: number,
			withdrawTime: number,
		] & {
			deposit: bigint;
			staked: boolean;
			stake: bigint;
			unstakeDelaySec: number;
			withdrawTime: number;
		}
	>(abi, "0xfc7e286d"),
	getDepositInfo: new Func<
		[account: string],
		{ account: string },
		[
			deposit: bigint,
			staked: boolean,
			stake: bigint,
			unstakeDelaySec: number,
			withdrawTime: number,
		] & {
			deposit: bigint;
			staked: boolean;
			stake: bigint;
			unstakeDelaySec: number;
			withdrawTime: number;
		}
	>(abi, "0x5287ce12"),
	getNonce: new Func<
		[sender: string, key: bigint],
		{ sender: string; key: bigint },
		bigint
	>(abi, "0x35567e1a"),
	getSenderAddress: new Func<[initCode: string], { initCode: string }, []>(
		abi,
		"0x9b249f69",
	),
	getUserOpHash: new Func<
		[
			userOp: [
				sender: string,
				nonce: bigint,
				initCode: string,
				callData: string,
				callGasLimit: bigint,
				verificationGasLimit: bigint,
				preVerificationGas: bigint,
				maxFeePerGas: bigint,
				maxPriorityFeePerGas: bigint,
				paymasterAndData: string,
				signature: string,
			] & {
				sender: string;
				nonce: bigint;
				initCode: string;
				callData: string;
				callGasLimit: bigint;
				verificationGasLimit: bigint;
				preVerificationGas: bigint;
				maxFeePerGas: bigint;
				maxPriorityFeePerGas: bigint;
				paymasterAndData: string;
				signature: string;
			},
		],
		{
			userOp: [
				sender: string,
				nonce: bigint,
				initCode: string,
				callData: string,
				callGasLimit: bigint,
				verificationGasLimit: bigint,
				preVerificationGas: bigint,
				maxFeePerGas: bigint,
				maxPriorityFeePerGas: bigint,
				paymasterAndData: string,
				signature: string,
			] & {
				sender: string;
				nonce: bigint;
				initCode: string;
				callData: string;
				callGasLimit: bigint;
				verificationGasLimit: bigint;
				preVerificationGas: bigint;
				maxFeePerGas: bigint;
				maxPriorityFeePerGas: bigint;
				paymasterAndData: string;
				signature: string;
			};
		},
		string
	>(abi, "0xa6193531"),
	handleAggregatedOps: new Func<
		[
			opsPerAggregator: Array<
				[
					userOps: Array<
						[
							sender: string,
							nonce: bigint,
							initCode: string,
							callData: string,
							callGasLimit: bigint,
							verificationGasLimit: bigint,
							preVerificationGas: bigint,
							maxFeePerGas: bigint,
							maxPriorityFeePerGas: bigint,
							paymasterAndData: string,
							signature: string,
						] & {
							sender: string;
							nonce: bigint;
							initCode: string;
							callData: string;
							callGasLimit: bigint;
							verificationGasLimit: bigint;
							preVerificationGas: bigint;
							maxFeePerGas: bigint;
							maxPriorityFeePerGas: bigint;
							paymasterAndData: string;
							signature: string;
						}
					>,
					aggregator: string,
					signature: string,
				] & {
					userOps: Array<
						[
							sender: string,
							nonce: bigint,
							initCode: string,
							callData: string,
							callGasLimit: bigint,
							verificationGasLimit: bigint,
							preVerificationGas: bigint,
							maxFeePerGas: bigint,
							maxPriorityFeePerGas: bigint,
							paymasterAndData: string,
							signature: string,
						] & {
							sender: string;
							nonce: bigint;
							initCode: string;
							callData: string;
							callGasLimit: bigint;
							verificationGasLimit: bigint;
							preVerificationGas: bigint;
							maxFeePerGas: bigint;
							maxPriorityFeePerGas: bigint;
							paymasterAndData: string;
							signature: string;
						}
					>;
					aggregator: string;
					signature: string;
				}
			>,
			beneficiary: string,
		],
		{
			opsPerAggregator: Array<
				[
					userOps: Array<
						[
							sender: string,
							nonce: bigint,
							initCode: string,
							callData: string,
							callGasLimit: bigint,
							verificationGasLimit: bigint,
							preVerificationGas: bigint,
							maxFeePerGas: bigint,
							maxPriorityFeePerGas: bigint,
							paymasterAndData: string,
							signature: string,
						] & {
							sender: string;
							nonce: bigint;
							initCode: string;
							callData: string;
							callGasLimit: bigint;
							verificationGasLimit: bigint;
							preVerificationGas: bigint;
							maxFeePerGas: bigint;
							maxPriorityFeePerGas: bigint;
							paymasterAndData: string;
							signature: string;
						}
					>,
					aggregator: string,
					signature: string,
				] & {
					userOps: Array<
						[
							sender: string,
							nonce: bigint,
							initCode: string,
							callData: string,
							callGasLimit: bigint,
							verificationGasLimit: bigint,
							preVerificationGas: bigint,
							maxFeePerGas: bigint,
							maxPriorityFeePerGas: bigint,
							paymasterAndData: string,
							signature: string,
						] & {
							sender: string;
							nonce: bigint;
							initCode: string;
							callData: string;
							callGasLimit: bigint;
							verificationGasLimit: bigint;
							preVerificationGas: bigint;
							maxFeePerGas: bigint;
							maxPriorityFeePerGas: bigint;
							paymasterAndData: string;
							signature: string;
						}
					>;
					aggregator: string;
					signature: string;
				}
			>;
			beneficiary: string;
		},
		[]
	>(abi, "0x4b1d7cf5"),
	handleOps: new Func<
		[
			ops: Array<
				[
					sender: string,
					nonce: bigint,
					initCode: string,
					callData: string,
					callGasLimit: bigint,
					verificationGasLimit: bigint,
					preVerificationGas: bigint,
					maxFeePerGas: bigint,
					maxPriorityFeePerGas: bigint,
					paymasterAndData: string,
					signature: string,
				] & {
					sender: string;
					nonce: bigint;
					initCode: string;
					callData: string;
					callGasLimit: bigint;
					verificationGasLimit: bigint;
					preVerificationGas: bigint;
					maxFeePerGas: bigint;
					maxPriorityFeePerGas: bigint;
					paymasterAndData: string;
					signature: string;
				}
			>,
			beneficiary: string,
		],
		{
			ops: Array<
				[
					sender: string,
					nonce: bigint,
					initCode: string,
					callData: string,
					callGasLimit: bigint,
					verificationGasLimit: bigint,
					preVerificationGas: bigint,
					maxFeePerGas: bigint,
					maxPriorityFeePerGas: bigint,
					paymasterAndData: string,
					signature: string,
				] & {
					sender: string;
					nonce: bigint;
					initCode: string;
					callData: string;
					callGasLimit: bigint;
					verificationGasLimit: bigint;
					preVerificationGas: bigint;
					maxFeePerGas: bigint;
					maxPriorityFeePerGas: bigint;
					paymasterAndData: string;
					signature: string;
				}
			>;
			beneficiary: string;
		},
		[]
	>(abi, "0x1fad948c"),
	incrementNonce: new Func<[key: bigint], { key: bigint }, []>(
		abi,
		"0x0bd28e3b",
	),
	innerHandleOp: new Func<
		[
			callData: string,
			opInfo: [
				mUserOp: [
					sender: string,
					nonce: bigint,
					callGasLimit: bigint,
					verificationGasLimit: bigint,
					preVerificationGas: bigint,
					paymaster: string,
					maxFeePerGas: bigint,
					maxPriorityFeePerGas: bigint,
				] & {
					sender: string;
					nonce: bigint;
					callGasLimit: bigint;
					verificationGasLimit: bigint;
					preVerificationGas: bigint;
					paymaster: string;
					maxFeePerGas: bigint;
					maxPriorityFeePerGas: bigint;
				},
				userOpHash: string,
				prefund: bigint,
				contextOffset: bigint,
				preOpGas: bigint,
			] & {
				mUserOp: [
					sender: string,
					nonce: bigint,
					callGasLimit: bigint,
					verificationGasLimit: bigint,
					preVerificationGas: bigint,
					paymaster: string,
					maxFeePerGas: bigint,
					maxPriorityFeePerGas: bigint,
				] & {
					sender: string;
					nonce: bigint;
					callGasLimit: bigint;
					verificationGasLimit: bigint;
					preVerificationGas: bigint;
					paymaster: string;
					maxFeePerGas: bigint;
					maxPriorityFeePerGas: bigint;
				};
				userOpHash: string;
				prefund: bigint;
				contextOffset: bigint;
				preOpGas: bigint;
			},
			context: string,
		],
		{
			callData: string;
			opInfo: [
				mUserOp: [
					sender: string,
					nonce: bigint,
					callGasLimit: bigint,
					verificationGasLimit: bigint,
					preVerificationGas: bigint,
					paymaster: string,
					maxFeePerGas: bigint,
					maxPriorityFeePerGas: bigint,
				] & {
					sender: string;
					nonce: bigint;
					callGasLimit: bigint;
					verificationGasLimit: bigint;
					preVerificationGas: bigint;
					paymaster: string;
					maxFeePerGas: bigint;
					maxPriorityFeePerGas: bigint;
				},
				userOpHash: string,
				prefund: bigint,
				contextOffset: bigint,
				preOpGas: bigint,
			] & {
				mUserOp: [
					sender: string,
					nonce: bigint,
					callGasLimit: bigint,
					verificationGasLimit: bigint,
					preVerificationGas: bigint,
					paymaster: string,
					maxFeePerGas: bigint,
					maxPriorityFeePerGas: bigint,
				] & {
					sender: string;
					nonce: bigint;
					callGasLimit: bigint;
					verificationGasLimit: bigint;
					preVerificationGas: bigint;
					paymaster: string;
					maxFeePerGas: bigint;
					maxPriorityFeePerGas: bigint;
				};
				userOpHash: string;
				prefund: bigint;
				contextOffset: bigint;
				preOpGas: bigint;
			};
			context: string;
		},
		bigint
	>(abi, "0x1d732756"),
	nonceSequenceNumber: new Func<[_: string, _: bigint], {}, bigint>(
		abi,
		"0x1b2e01b8",
	),
	simulateHandleOp: new Func<
		[
			op: [
				sender: string,
				nonce: bigint,
				initCode: string,
				callData: string,
				callGasLimit: bigint,
				verificationGasLimit: bigint,
				preVerificationGas: bigint,
				maxFeePerGas: bigint,
				maxPriorityFeePerGas: bigint,
				paymasterAndData: string,
				signature: string,
			] & {
				sender: string;
				nonce: bigint;
				initCode: string;
				callData: string;
				callGasLimit: bigint;
				verificationGasLimit: bigint;
				preVerificationGas: bigint;
				maxFeePerGas: bigint;
				maxPriorityFeePerGas: bigint;
				paymasterAndData: string;
				signature: string;
			},
			target: string,
			targetCallData: string,
		],
		{
			op: [
				sender: string,
				nonce: bigint,
				initCode: string,
				callData: string,
				callGasLimit: bigint,
				verificationGasLimit: bigint,
				preVerificationGas: bigint,
				maxFeePerGas: bigint,
				maxPriorityFeePerGas: bigint,
				paymasterAndData: string,
				signature: string,
			] & {
				sender: string;
				nonce: bigint;
				initCode: string;
				callData: string;
				callGasLimit: bigint;
				verificationGasLimit: bigint;
				preVerificationGas: bigint;
				maxFeePerGas: bigint;
				maxPriorityFeePerGas: bigint;
				paymasterAndData: string;
				signature: string;
			};
			target: string;
			targetCallData: string;
		},
		[]
	>(abi, "0xd6383f94"),
	simulateValidation: new Func<
		[
			userOp: [
				sender: string,
				nonce: bigint,
				initCode: string,
				callData: string,
				callGasLimit: bigint,
				verificationGasLimit: bigint,
				preVerificationGas: bigint,
				maxFeePerGas: bigint,
				maxPriorityFeePerGas: bigint,
				paymasterAndData: string,
				signature: string,
			] & {
				sender: string;
				nonce: bigint;
				initCode: string;
				callData: string;
				callGasLimit: bigint;
				verificationGasLimit: bigint;
				preVerificationGas: bigint;
				maxFeePerGas: bigint;
				maxPriorityFeePerGas: bigint;
				paymasterAndData: string;
				signature: string;
			},
		],
		{
			userOp: [
				sender: string,
				nonce: bigint,
				initCode: string,
				callData: string,
				callGasLimit: bigint,
				verificationGasLimit: bigint,
				preVerificationGas: bigint,
				maxFeePerGas: bigint,
				maxPriorityFeePerGas: bigint,
				paymasterAndData: string,
				signature: string,
			] & {
				sender: string;
				nonce: bigint;
				initCode: string;
				callData: string;
				callGasLimit: bigint;
				verificationGasLimit: bigint;
				preVerificationGas: bigint;
				maxFeePerGas: bigint;
				maxPriorityFeePerGas: bigint;
				paymasterAndData: string;
				signature: string;
			};
		},
		[]
	>(abi, "0xee219423"),
	unlockStake: new Func<[], {}, []>(abi, "0xbb9fe6bf"),
	withdrawStake: new Func<
		[withdrawAddress: string],
		{ withdrawAddress: string },
		[]
	>(abi, "0xc23a5cea"),
	withdrawTo: new Func<
		[withdrawAddress: string, withdrawAmount: bigint],
		{ withdrawAddress: string; withdrawAmount: bigint },
		[]
	>(abi, "0x205c2878"),
};

export class Contract extends ContractBase {
	SIG_VALIDATION_FAILED(): Promise<bigint> {
		return this.eth_call(functions.SIG_VALIDATION_FAILED, []);
	}

	balanceOf(account: string): Promise<bigint> {
		return this.eth_call(functions.balanceOf, [account]);
	}

	deposits(arg0: string): Promise<
		[
			deposit: bigint,
			staked: boolean,
			stake: bigint,
			unstakeDelaySec: number,
			withdrawTime: number,
		] & {
			deposit: bigint;
			staked: boolean;
			stake: bigint;
			unstakeDelaySec: number;
			withdrawTime: number;
		}
	> {
		return this.eth_call(functions.deposits, [arg0]);
	}

	getDepositInfo(account: string): Promise<
		[
			deposit: bigint,
			staked: boolean,
			stake: bigint,
			unstakeDelaySec: number,
			withdrawTime: number,
		] & {
			deposit: bigint;
			staked: boolean;
			stake: bigint;
			unstakeDelaySec: number;
			withdrawTime: number;
		}
	> {
		return this.eth_call(functions.getDepositInfo, [account]);
	}

	getNonce(sender: string, key: bigint): Promise<bigint> {
		return this.eth_call(functions.getNonce, [sender, key]);
	}

	getUserOpHash(
		userOp: [
			sender: string,
			nonce: bigint,
			initCode: string,
			callData: string,
			callGasLimit: bigint,
			verificationGasLimit: bigint,
			preVerificationGas: bigint,
			maxFeePerGas: bigint,
			maxPriorityFeePerGas: bigint,
			paymasterAndData: string,
			signature: string,
		] & {
			sender: string;
			nonce: bigint;
			initCode: string;
			callData: string;
			callGasLimit: bigint;
			verificationGasLimit: bigint;
			preVerificationGas: bigint;
			maxFeePerGas: bigint;
			maxPriorityFeePerGas: bigint;
			paymasterAndData: string;
			signature: string;
		},
	): Promise<string> {
		return this.eth_call(functions.getUserOpHash, [userOp]);
	}

	nonceSequenceNumber(arg0: string, arg1: bigint): Promise<bigint> {
		return this.eth_call(functions.nonceSequenceNumber, [arg0, arg1]);
	}
}
