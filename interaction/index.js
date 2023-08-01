require('dotenv').config();
const ethers = require('ethers');

const contractABI = [];


const provider = new ethers.AlchemyProvider(
  'goerli',
  process.env.ALCHEMY_KEY
);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);


async function main() {
  const swapContract = new ethers.Contract(
    '', // my goerli deployment address
    contractABI,
    wallet
  );
  
  const toWei = ethers.parseEther(`4`);
  let tx = await swapContract.depositTokens(toWei);
  let tx2 = await swapContract.tokenBalance();
  let tx3 = await swapContract.addList("");
  
  console.log(tx3);
}

main();