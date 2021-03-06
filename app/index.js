import {address} from './__config';
import Voting from '../artifacts/contracts/Voting.sol/Voting';
import "./populate.js"
import {ethers} from 'ethers'
const provider = new ethers.providers.Web3Provider(window.ethereum);

async function newDecision() {
  const decision = document.getElementById("textfordecision").value;
  await ethereum.request({ method: 'eth_requestAccounts' });
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, Voting.abi, signer);
  await contract.newDecision(decision);
}

document.getElementById("createdecision").addEventListener("click", newDecision);


