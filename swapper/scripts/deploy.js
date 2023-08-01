
async function main() {
  const payableAmount = ethers.parseEther("0.003");
  const ethlimit = ethers.parseEther("0.001");
  const tokenlimit = ethers.parseEther("1");
  const swap = await hre.ethers.deployContract("Swap", ["0x655F2166b0709cd575202630952D71E2bB0d61Af", `${ethlimit}`, `${tokenlimit}`], {
    value: payableAmount,
  });

  await swap.waitForDeployment();

  console.log(`deployed to ${swap.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});