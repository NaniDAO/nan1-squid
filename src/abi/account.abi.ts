export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
    {
        "type": "error",
        "name": "AlreadyInitialized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NewOwnerIsZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoHandoverRequest",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnauthorizedCallContext",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UpgradeFailed",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipHandoverCanceled",
        "inputs": [
            {
                "type": "address",
                "name": "pendingOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipHandoverRequested",
        "inputs": [
            {
                "type": "address",
                "name": "pendingOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "oldOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Upgraded",
        "inputs": [
            {
                "type": "address",
                "name": "implementation",
                "indexed": true
            }
        ]
    },
    {
        "type": "fallback",
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "addDeposit",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelOwnershipHandover",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "completeOwnershipHandover",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "pendingOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "delegateExecute",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "delegate"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "eip712Domain",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes1",
                "name": "fields"
            },
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "string",
                "name": "version"
            },
            {
                "type": "uint256",
                "name": "chainId"
            },
            {
                "type": "address",
                "name": "verifyingContract"
            },
            {
                "type": "bytes32",
                "name": "salt"
            },
            {
                "type": "uint256[]",
                "name": "extensions"
            }
        ]
    },
    {
        "type": "function",
        "name": "entryPoint",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "execute",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "target"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "executeBatch",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "calls",
                "components": [
                    {
                        "type": "address",
                        "name": "target"
                    },
                    {
                        "type": "uint256",
                        "name": "value"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": "results"
            }
        ]
    },
    {
        "type": "function",
        "name": "getDeposit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isValidSignature",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash"
            },
            {
                "type": "bytes",
                "name": "signature"
            }
        ],
        "outputs": [
            {
                "type": "bytes4",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "ownershipHandoverExpiresAt",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pendingOwner"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "proxiableUUID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "requestOwnershipHandover",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "storageLoad",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "storageSlot"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "storageStore",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes32",
                "name": "storageSlot"
            },
            {
                "type": "bytes32",
                "name": "storageValue"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "upgradeTo",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "newImplementation"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "upgradeToAndCall",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "newImplementation"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "validateUserOp",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
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
            },
            {
                "type": "bytes32",
                "name": "userOpHash"
            },
            {
                "type": "uint256",
                "name": "missingAccountFunds"
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
        "name": "withdrawDepositTo",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
