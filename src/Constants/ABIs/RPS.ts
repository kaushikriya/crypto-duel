import { Abi } from "viem";

export const gameContractAbi: Abi= [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_c1",
				"type": "uint8"
			},
			{
				"name": "_c2",
				"type": "uint8"
			}
		],
		"name": "win",
		"outputs": [
			{
				"name": "w",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "j2Timeout",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getSecondPlayerAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getLastAction",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getTimeout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "stake",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "c2",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "c1Hash",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_c2",
				"type": "uint8"
			}
		],
		"name": "play",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "j2",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastAction",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_c1",
				"type": "uint8"
			},
			{
				"name": "_salt",
				"type": "uint256"
			}
		],
		"name": "solve",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "j1",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getFirstPlayerAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "j1Timeout",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "TIMEOUT",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getStake",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_c1Hash",
				"type": "bytes32"
			},
			{
				"name": "_j2",
				"type": "address"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]

export const gameContractBytecode:string='608060405261012c600555604051604080610c86833981018060405281019080805190602001909291908051906020019092919050505034600481905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160028160001916905550426006819055505050610ba5806100e16000396000f3006080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c4395b9146100f6578063294914a41461014b5780632acfff70146101625780632f38c3d1146101b95780633499ba95146101e45780633a4b66f11461020f57806348e257cb1461023a5780634d03e3d21461027357806353a04b05146102a657806380985af9146102c957806389f71d5314610320578063a5ddec7c1461034b578063c37597c614610385578063c3ed54fc146103dc578063c839114214610433578063f56f48f21461044a578063fc0e3d9014610475575b600080fd5b34801561010257600080fd5b50610131600480360381019080803560ff169060200190929190803560ff1690602001909291905050506104a0565b604051808215151515815260200191505060405180910390f35b34801561015757600080fd5b50610160610569565b005b34801561016e57600080fd5b50610177610614565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101c557600080fd5b506101ce61063e565b6040518082815260200191505060405180910390f35b3480156101f057600080fd5b506101f9610648565b6040518082815260200191505060405180910390f35b34801561021b57600080fd5b50610224610652565b6040518082815260200191505060405180910390f35b34801561024657600080fd5b5061024f610658565b6040518082600581111561025f57fe5b60ff16815260200191505060405180910390f35b34801561027f57600080fd5b5061028861066b565b60405180826000191660001916815260200191505060405180910390f35b6102c7600480360381019080803560ff169060200190929190505050610671565b005b3480156102d557600080fd5b506102de610764565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561032c57600080fd5b5061033561078a565b6040518082815260200191505060405180910390f35b34801561035757600080fd5b50610383600480360381019080803560ff16906020019092919080359060200190929190505050610790565b005b34801561039157600080fd5b5061039a610a6b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103e857600080fd5b506103f1610a90565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561043f57600080fd5b50610448610ab9565b005b34801561045657600080fd5b5061045f610b69565b6040518082815260200191505060405180910390f35b34801561048157600080fd5b5061048a610b6f565b6040518082815260200191505060405180910390f35b60008160058111156104ae57fe5b8360058111156104ba57fe5b14156104c95760009050610563565b600060058111156104d657fe5b8360058111156104e257fe5b14156104f15760009050610563565b60028260058111156104ff57fe5b81151561050857fe5b06600284600581111561051757fe5b81151561052057fe5b0614156105475781600581111561053357fe5b83600581111561053f57fe5b109050610563565b81600581111561055357fe5b83600581111561055f57fe5b1190505b92915050565b6000600581111561057657fe5b600360009054906101000a900460ff16600581111561059157fe5b14151561059d57600080fd5b60055460065401421115156105b157600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050506000600481905550565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600654905090565b6000600554905090565b60045481565b600360009054906101000a900460ff1681565b60025481565b6000600581111561067e57fe5b600360009054906101000a900460ff16600581111561069957fe5b1415156106a557600080fd5b600060058111156106b257fe5b8160058111156106be57fe5b141515156106cb57600080fd5b600454341415156106db57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561073757600080fd5b80600360006101000a81548160ff0219169083600581111561075557fe5b02179055504260068190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b6000600581111561079d57fe5b8260058111156107a957fe5b141515156107b657600080fd5b600060058111156107c357fe5b600360009054906101000a900460ff1660058111156107de57fe5b141515156107eb57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561084657600080fd5b6002546000191682826040518083600581111561085f57fe5b60ff167f0100000000000000000000000000000000000000000000000000000000000000028152600101828152602001925050506040518091039020600019161415156108ab57600080fd5b6108c482600360009054906101000a900460ff166104a0565b1561092a576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f1935050505050610a5f565b610943600360009054906101000a900460ff16836104a0565b156109aa57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f1935050505050610a5e565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050505b5b60006004819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006005811115610ac657fe5b600360009054906101000a900460ff166005811115610ae157fe5b14151515610aee57600080fd5b6005546006540142111515610b0257600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506000600481905550565b60055481565b60006004549050905600a165627a7a723058202194c46b878f42473364f3efeb39730c6462285abdb47507651b0cb779a069b50029'