import { abi } from "./build/iVote.json";
import web3 from "./web3";
const address = "0x0A5ec2a0C1802E772E796F5d1cF6A8a109FDb29b";
const iVoteContract = new web3.eth.Contract(abi, address);
export default iVoteContract;
