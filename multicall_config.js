const configs = {
    ropsten: {
      rpcUrl: "https://ropsten.infura.io/",
      multicallAddress: "0xA457b5B859573e8eB758B6C2BFD4aE3042B422FD"
    },

    mainnet: {
        rpcUrl: "https://mainnet.infura.io/",
        multicallAddress: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441"
    },

    kovan: {
        rpcUrl: "https://kovan.infura.io/",
        multicallAddress: "0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a"
    },

    rinkeby: {
        rpcUrl: "https://rinkeby.infura.io/",
        multicallAddress: "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821"
    },
};

exports.configs = configs;
