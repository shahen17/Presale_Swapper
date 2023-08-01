
async function main() {
  const payableAmount = ethers.parseEther("0.003");
  const ethlimit = ethers.parseEther("0.001"); // limit t0 recieve ETH
  const tokenlimit = ethers.parseEther("1"); // limit to send Tokens
  const swap = await hre.ethers.deployContract("Swap", ["", `${ethlimit}`, `${tokenlimit}`], {
    value: payableAmount,
  });

  await swap.waitForDeployment();

  console.log(`deployed to ${swap.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
