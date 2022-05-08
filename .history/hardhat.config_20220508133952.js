require("@nomiclabs/hardhat-waffle");
const projectId = "d2054b7148734c33bbe8d7412cc0cfe3";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    palmTest: {
      url: `https://palm-testnet.infura.io/v3/${projectId}`
    },
    palmMain: {
      url: `https://palm-mainnet.infura.io/v3/${}`
    }
    
  },
  solidity: "0.8.4",
};
