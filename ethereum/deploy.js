
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactrory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
   'foot whip corn slam magic artefact height knife rug yard spot cat',
   'https://rinkeby.infura.io/v3/7eab2d9f77364e69ac3a573089097b65', 2, 2
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactrory.interface))
    .deploy({ data: compiledFactrory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();
