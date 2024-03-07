export const ABI_JSON = [
    {
        "type": "error",
        "name": "ExecutionResult",
        "inputs": [
            {
                "type": "uint256",
                "name": "preOpGas"
            },
            {
                "type": "uint256",
                "name": "paid"
            },
            {
                "type": "uint48",
                "name": "validAfter"
            },
            {
                "type": "uint48",
                "name": "validUntil"
            },
            {
                "type": "bool",
                "name": "targetSuccess"
            },
            {
                "type": "bytes",
                "name": "targetResult"
            }
        ]
    },
    {
        "type": "error",
        "name": "FailedOp",
        "inputs": [
            {
                "type": "uint256",
                "name": "opIndex"
            },
            {
                "type": "string",
                "name": "reason"
            }
        ]
    },
    {
        "type": "error",
        "name": "SenderAddressResult",
        "inputs": [
            {
                "type": "address",
                "name": "sender"
            }
        ]
    },
    {
        "type": "error",
        "name": "SignatureValidationFailed",
        "inputs": [
            {
                "type": "address",
                "name": "aggregator"
            }
        ]
    },
    {
        "type": "error",
        "name": "ValidationResult",
        "inputs": [
            {
                "type": "tuple",
                "name": "returnInfo",
                "components": [
                    {
                        "type": "uint256",
                        "name": "preOpGas"
                    },
                    {
                        "type": "uint256",
                        "name": "prefund"
                    },
                    {
                        "type": "bool",
                        "name": "sigFailed"
                    },
                    {
                        "type": "uint48",
                        "name": "validAfter"
                    },
                    {
                        "type": "uint48",
                        "name": "validUntil"
                    },
                    {
                        "type": "bytes",
                        "name": "paymasterContext"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "senderInfo",
                "components": [
                    {
                        "type": "uint256",
                        "name": "stake"
                    },
                    {
                        "type": "uint256",
                        "name": "unstakeDelaySec"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "factoryInfo",
                "components": [
                    {
                        "type": "uint256",
                        "name": "stake"
                    },
                    {
                        "type": "uint256",
                        "name": "unstakeDelaySec"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "paymasterInfo",
                "components": [
                    {
                        "type": "uint256",
                        "name": "stake"
                    },
                    {
                        "type": "uint256",
                        "name": "unstakeDelaySec"
                    }
                ]
            }
        ]
    },
    {
        "type": "error",
        "name": "ValidationResultWithAggregation",
        "inputs": [
            {
                "type": "tuple",
                "name": "returnInfo",
                "components": [
                    {
                        "type": "uint256",
                        "name": "preOpGas"
                    },
                    {
                        "type": "uint256",
                        "name": "prefund"
                    },
                    {
                        "type": "bool",
                        "name": "sigFailed"
                    },
                    {
                        "type": "uint48",
                        "name": "validAfter"
                    },
                    {
                        "type": "uint48",
                        "name": "validUntil"
                    },
                    {
                        "type": "bytes",
                        "name": "paymasterContext"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "senderInfo",
                "components": [
                    {
                        "type": "uint256",
                        "name": "stake"
                    },
                    {
                        "type": "uint256",
                        "name": "unstakeDelaySec"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "factoryInfo",
                "components": [
                    {
                        "type": "uint256",
                        "name": "stake"
                    },
                    {
                        "type": "uint256",
                        "name": "unstakeDelaySec"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "paymasterInfo",
                "components": [
                    {
                        "type": "uint256",
                        "name": "stake"
                    },
                    {
                        "type": "uint256",
                        "name": "unstakeDelaySec"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "aggregatorInfo",
                "components": [
                    {
                        "type": "address",
                        "name": "aggregator"
                    },
                    {
                        "type": "tuple",
                        "name": "stakeInfo",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "stake"
                            },
                            {
                                "type": "uint256",
                                "name": "unstakeDelaySec"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AccountDeployed",
        "inputs": [
            {
                "type": "bytes32",
                "name": "userOpHash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            },
            {
                "type": "address",
                "name": "factory",
                "indexed": false
            },
            {
                "type": "address",
                "name": "paymaster",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BeforeExecution",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Deposited",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "totalDeposit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SignatureAggregatorChanged",
        "inputs": [
            {
                "type": "address",
                "name": "aggregator",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakeLocked",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "totalStaked",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "unstakeDelaySec",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakeUnlocked",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "withdrawTime",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakeWithdrawn",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "withdrawAddress",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UserOperationEvent",
        "inputs": [
            {
                "type": "bytes32",
                "name": "userOpHash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            },
            {
                "type": "address",
                "name": "paymaster",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "nonce",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "success",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "actualGasCost",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "actualGasUsed",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UserOperationRevertReason",
        "inputs": [
            {
                "type": "bytes32",
                "name": "userOpHash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "nonce",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "revertReason",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Withdrawn",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "withdrawAddress",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "SIG_VALIDATION_FAILED",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "_validateSenderAndPaymaster",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "initCode"
            },
            {
                "type": "address",
                "name": "sender"
            },
            {
                "type": "bytes",
                "name": "paymasterAndData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addStake",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint32",
                "name": "unstakeDelaySec"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "depositTo",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deposits",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint112",
                "name": "deposit"
            },
            {
                "type": "bool",
                "name": "staked"
            },
            {
                "type": "uint112",
                "name": "stake"
            },
            {
                "type": "uint32",
                "name": "unstakeDelaySec"
            },
            {
                "type": "uint48",
                "name": "withdrawTime"
            }
        ]
    },
    {
        "type": "function",
        "name": "getDepositInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "info",
                "components": [
                    {
                        "type": "uint112",
                        "name": "deposit"
                    },
                    {
                        "type": "bool",
                        "name": "staked"
                    },
                    {
                        "type": "uint112",
                        "name": "stake"
                    },
                    {
                        "type": "uint32",
                        "name": "unstakeDelaySec"
                    },
                    {
                        "type": "uint48",
                        "name": "withdrawTime"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getNonce",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "sender"
            },
            {
                "type": "uint192",
                "name": "key"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "nonce"
            }
        ]
    },
    {
        "type": "function",
        "name": "getSenderAddress",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "initCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getUserOpHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "userOp",
                "components": [
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "bytes",
                        "name": "initCode"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "uint256",
                        "name": "callGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "verificationGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "preVerificationGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxFeePerGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxPriorityFeePerGas"
                    },
                    {
                        "type": "bytes",
                        "name": "paymasterAndData"
                    },
                    {
                        "type": "bytes",
                        "name": "signature"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "handleAggregatedOps",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "opsPerAggregator",
                "components": [
                    {
                        "type": "tuple[]",
                        "name": "userOps",
                        "components": [
                            {
                                "type": "address",
                                "name": "sender"
                            },
                            {
                                "type": "uint256",
                                "name": "nonce"
                            },
                            {
                                "type": "bytes",
                                "name": "initCode"
                            },
                            {
                                "type": "bytes",
                                "name": "callData"
                            },
                            {
                                "type": "uint256",
                                "name": "callGasLimit"
                            },
                            {
                                "type": "uint256",
                                "name": "verificationGasLimit"
                            },
                            {
                                "type": "uint256",
                                "name": "preVerificationGas"
                            },
                            {
                                "type": "uint256",
                                "name": "maxFeePerGas"
                            },
                            {
                                "type": "uint256",
                                "name": "maxPriorityFeePerGas"
                            },
                            {
                                "type": "bytes",
                                "name": "paymasterAndData"
                            },
                            {
                                "type": "bytes",
                                "name": "signature"
                            }
                        ]
                    },
                    {
                        "type": "address",
                        "name": "aggregator"
                    },
                    {
                        "type": "bytes",
                        "name": "signature"
                    }
                ]
            },
            {
                "type": "address",
                "name": "beneficiary"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "handleOps",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "ops",
                "components": [
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "bytes",
                        "name": "initCode"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "uint256",
                        "name": "callGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "verificationGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "preVerificationGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxFeePerGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxPriorityFeePerGas"
                    },
                    {
                        "type": "bytes",
                        "name": "paymasterAndData"
                    },
                    {
                        "type": "bytes",
                        "name": "signature"
                    }
                ]
            },
            {
                "type": "address",
                "name": "beneficiary"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "incrementNonce",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint192",
                "name": "key"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "innerHandleOp",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "callData"
            },
            {
                "type": "tuple",
                "name": "opInfo",
                "components": [
                    {
                        "type": "tuple",
                        "name": "mUserOp",
                        "components": [
                            {
                                "type": "address",
                                "name": "sender"
                            },
                            {
                                "type": "uint256",
                                "name": "nonce"
                            },
                            {
                                "type": "uint256",
                                "name": "callGasLimit"
                            },
                            {
                                "type": "uint256",
                                "name": "verificationGasLimit"
                            },
                            {
                                "type": "uint256",
                                "name": "preVerificationGas"
                            },
                            {
                                "type": "address",
                                "name": "paymaster"
                            },
                            {
                                "type": "uint256",
                                "name": "maxFeePerGas"
                            },
                            {
                                "type": "uint256",
                                "name": "maxPriorityFeePerGas"
                            }
                        ]
                    },
                    {
                        "type": "bytes32",
                        "name": "userOpHash"
                    },
                    {
                        "type": "uint256",
                        "name": "prefund"
                    },
                    {
                        "type": "uint256",
                        "name": "contextOffset"
                    },
                    {
                        "type": "uint256",
                        "name": "preOpGas"
                    }
                ]
            },
            {
                "type": "bytes",
                "name": "context"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "actualGasCost"
            }
        ]
    },
    {
        "type": "function",
        "name": "nonceSequenceNumber",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "uint192",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "simulateHandleOp",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "op",
                "components": [
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "bytes",
                        "name": "initCode"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "uint256",
                        "name": "callGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "verificationGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "preVerificationGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxFeePerGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxPriorityFeePerGas"
                    },
                    {
                        "type": "bytes",
                        "name": "paymasterAndData"
                    },
                    {
                        "type": "bytes",
                        "name": "signature"
                    }
                ]
            },
            {
                "type": "address",
                "name": "target"
            },
            {
                "type": "bytes",
                "name": "targetCallData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "simulateValidation",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "userOp",
                "components": [
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "bytes",
                        "name": "initCode"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "uint256",
                        "name": "callGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "verificationGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "preVerificationGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxFeePerGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxPriorityFeePerGas"
                    },
                    {
                        "type": "bytes",
                        "name": "paymasterAndData"
                    },
                    {
                        "type": "bytes",
                        "name": "signature"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unlockStake",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawStake",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "withdrawAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawTo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "withdrawAddress"
            },
            {
                "type": "uint256",
                "name": "withdrawAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
