import { Contract, providers } from 'ethers';

import SSW from './contracts/ssw.json';
// define anemia requirement
// traverse pieces on SSW
// boop out data to a JSON file for posterity

// stretch: display nicely on a website
// stretch: listen for events on SSW contract to update website

const SSW_CONTRACT_ADDRESS = '0x486ca491C9A0a9ACE266AA100976bfefC57A0Dd4';
const SSW_RPC_URL = 'https://rpc-mainnet.maticvigil.com/v1/e681d0d0e11c5ec8f8b3e9fa4817f54d2bb8a8c7';
const MATIC_NETWORK_CHAIN_ID = 137;

(async () => {
  const provider = new providers.JsonRpcProvider(SSW_RPC_URL, MATIC_NETWORK_CHAIN_ID);
  console.log('provider initialized');
  const contract = new Contract(SSW_CONTRACT_ADDRESS, SSW);
  console.log('contract initialized');
})();
