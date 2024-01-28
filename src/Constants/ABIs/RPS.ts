import { Abi } from "viem";

export const gameContractAbi: Abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_c1",
        type: "uint8",
      },
      {
        name: "_c2",
        type: "uint8",
      },
    ],
    name: "win",
    outputs: [
      {
        name: "w",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "j2Timeout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getSecondPlayerAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getLastAction",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getTimeout",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "stake",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "c2",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "c1Hash",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_c2",
        type: "uint8",
      },
    ],
    name: "play",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "j2",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "lastAction",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getSecondPlayerMove",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_c1",
        type: "uint8",
      },
      {
        name: "_salt",
        type: "uint256",
      },
    ],
    name: "solve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "j1",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getFirstPlayerAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "j1Timeout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "TIMEOUT",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getStake",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_c1Hash",
        type: "bytes32",
      },
      {
        name: "_j2",
        type: "address",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "constructor",
  },
];

export const gameContractBytecode: string =
  "608060405261012c600555604051604080610ce1833981018060405281019080805190602001909291908051906020019092919050505034600481905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160028160001916905550426006819055505050610c00806100e16000396000f3006080604052600436106100fc576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c4395b914610101578063294914a4146101565780632acfff701461016d5780632f38c3d1146101c45780633499ba95146101ef5780633a4b66f11461021a57806348e257cb146102455780634d03e3d21461027e57806353a04b05146102b157806380985af9146102d457806389f71d531461032b5780638b7626e214610356578063a5ddec7c1461038f578063c37597c6146103c9578063c3ed54fc14610420578063c839114214610477578063f56f48f21461048e578063fc0e3d90146104b9575b600080fd5b34801561010d57600080fd5b5061013c600480360381019080803560ff169060200190929190803560ff1690602001909291905050506104e4565b604051808215151515815260200191505060405180910390f35b34801561016257600080fd5b5061016b6105ad565b005b34801561017957600080fd5b50610182610658565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101d057600080fd5b506101d9610682565b6040518082815260200191505060405180910390f35b3480156101fb57600080fd5b5061020461068c565b6040518082815260200191505060405180910390f35b34801561022657600080fd5b5061022f610696565b6040518082815260200191505060405180910390f35b34801561025157600080fd5b5061025a61069c565b6040518082600581111561026a57fe5b60ff16815260200191505060405180910390f35b34801561028a57600080fd5b506102936106af565b60405180826000191660001916815260200191505060405180910390f35b6102d2600480360381019080803560ff1690602001909291905050506106b5565b005b3480156102e057600080fd5b506102e96107a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561033757600080fd5b506103406107ce565b6040518082815260200191505060405180910390f35b34801561036257600080fd5b5061036b6107d4565b6040518082600581111561037b57fe5b60ff16815260200191505060405180910390f35b34801561039b57600080fd5b506103c7600480360381019080803560ff169060200190929190803590602001909291905050506107eb565b005b3480156103d557600080fd5b506103de610ac6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561042c57600080fd5b50610435610aeb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561048357600080fd5b5061048c610b14565b005b34801561049a57600080fd5b506104a3610bc4565b6040518082815260200191505060405180910390f35b3480156104c557600080fd5b506104ce610bca565b6040518082815260200191505060405180910390f35b60008160058111156104f257fe5b8360058111156104fe57fe5b141561050d57600090506105a7565b6000600581111561051a57fe5b83600581111561052657fe5b141561053557600090506105a7565b600282600581111561054357fe5b81151561054c57fe5b06600284600581111561055b57fe5b81151561056457fe5b06141561058b5781600581111561057757fe5b83600581111561058357fe5b1090506105a7565b81600581111561059757fe5b8360058111156105a357fe5b1190505b92915050565b600060058111156105ba57fe5b600360009054906101000a900460ff1660058111156105d557fe5b1415156105e157600080fd5b60055460065401421115156105f557600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050506000600481905550565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600654905090565b6000600554905090565b60045481565b600360009054906101000a900460ff1681565b60025481565b600060058111156106c257fe5b600360009054906101000a900460ff1660058111156106dd57fe5b1415156106e957600080fd5b600060058111156106f657fe5b81600581111561070257fe5b1415151561070f57600080fd5b6004543414151561071f57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077b57600080fd5b80600360006101000a81548160ff0219169083600581111561079957fe5b02179055504260068190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b6000600360009054906101000a900460ff16905090565b600060058111156107f857fe5b82600581111561080457fe5b1415151561081157600080fd5b6000600581111561081e57fe5b600360009054906101000a900460ff16600581111561083957fe5b1415151561084657600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108a157600080fd5b600254600019168282604051808360058111156108ba57fe5b60ff167f01000000000000000000000000000000000000000000000000000000000000000281526001018281526020019250505060405180910390206000191614151561090657600080fd5b61091f82600360009054906101000a900460ff166104e4565b15610985576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f1935050505050610aba565b61099e600360009054906101000a900460ff16836104e4565b15610a0557600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f1935050505050610ab9565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050505b5b60006004819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006005811115610b2157fe5b600360009054906101000a900460ff166005811115610b3c57fe5b14151515610b4957600080fd5b6005546006540142111515610b5d57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506000600481905550565b60055481565b60006004549050905600a165627a7a723058209d6f1d8ef58cd1e3ee86637cadc1790abdefae7bd06c6e204b5c69015b775fb00029";
