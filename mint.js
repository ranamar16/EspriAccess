import { address, contract } from './contract.js';
import { web3, connectMetaMask } from './connectWallet.js';
// default libraries that make all of this possible
import { ImmutableXClient } from '@imtbl/imx-sdk';
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';

// setting up the provider
const provider = new AlchemyProvider('ropsten', window.ALCHEMY_API_KEY);

const mintRequest = async () => {
    try {
        var url = 'https://server.getespri.com/api/ip/create';
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            "userAddress": window.ethereum.selectedAddress,
            "tokenId": "500"
        }));
    } catch(e) {
        console.log('error mintintg')
    }
}
const main = async()=>{
    try{
        await mintRequest();
        console.log('Minting success!', result);

    // operation can fail if the request is malformed or the tokenId provided already exists
    } catch(err) {
        console.error('Minting failed with the following', err)
    }
}

document.querySelector('#mint-nft').addEventListener('click', main);
window.contract = contract;
window.web3 = web3;
window.mint = mint;