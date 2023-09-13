const hre = require('hardhat');

async function main() {
  const Scoop = await hre.ethers.getContractFactory('Scoop');
  const scoop = await Scoop.deploy();

  await scoop.deployed();

  console.log(`Scoop contract has been deployed : ${scoop.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })