require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    bartio: {
      url: "https://bartio.rpc.berachain.com",
      accounts: [process.env.WALLET_KEY]
    },
  },
};
