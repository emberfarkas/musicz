require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

// let truffle know what chain to migrate your contracts to
module.exports = {
  networks: {
    test: {
      skipDryRun: true,
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      provider: () => new HDWalletProvider(
        process.env.PRIV_KEY_DEPLOY,
        "http://127.0.0.1:7545",
      ),
    },
    live: {
      skipDryRun: true,
      network_id: "*",
      provider: () => {
        return new HDWalletProvider(
          process.env.PRIV_KEY_DEPLOY_LIVE,
          "http://121.36.71.137:7545",
        )
      },
    },
    hecotest: {
      skipDryRun: true,
      network_id: "*",
      provider: () => {
        return new HDWalletProvider(
          process.env.PRIV_KEY_DEPLOY_LIVE,
          "https://http-testnet.hecochain.com",
        )
      },
    },
    polygontest: {
      skipDryRun: true,
      network_id: "*",
      provider: () => {
        return new HDWalletProvider(
          process.env.PRIV_KEY_DEPLOY_LIVE,
          "https://rpc-mumbai.matic.today",
        )
      },
    },
  },
  mocha: {
    useColors: true
  },  
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 20   // Optimize for how many times you intend to run the code
        },
      },
    },
  },
};
