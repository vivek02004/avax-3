

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SimpleWalletModule", (m) => {
  // Deploy the SimpleWallet contract without any constructor parameters
  const simpleWallet = m.contract("SimpleWallet");

  return { simpleWallet };
});
