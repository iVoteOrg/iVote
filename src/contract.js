import { abi } from "./build/iVote.json";
import web3 from "./web3";
const address = "0x78fE2EA172b8e84E384aF6a14a17DdE9d7c66F12";
const iVoteContract = new web3.eth.Contract(abi, address);
export default iVoteContract;
