require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "d2054b7148734c33bbe8d7412cc0cfe3";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    palmTest: {
      url: `https://palm-testnet.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    },
    Mainnet: {
      url: `https://palm-mainnet.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    }
    
  },
  solidity: "0.8.4",
};
