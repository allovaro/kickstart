import Web3 from 'web3';


let web3;

if (typeof window !== 'undefined') {
  // We are in the browser and metamask is running.
  const ethEnabled = async () => {
    await window.ethereum.send('eth_requestAccounts');
  }
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/7eab2d9f77364e69ac3a573089097b65'
  );
  web3 = new Web3(provider);
}

export default web3;
