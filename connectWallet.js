const web3 = new Web3(ethereum);

const isMetaMaskConnected = async () => {
    let accounts = await web3.eth.getAccounts();
    return accounts.length > 0;
}

const updateMetaMaskStatus = () => {
  isMetaMaskConnected().then((connected) => {
    let button = document.querySelector('#connect');
    if (connected) {
        button.textContent = "MetaMask connected";
    }
  });
}

const connectMetaMask = async (shouldReload = true) => {
  if (await isMetaMaskConnected() === false) {
    await ethereum.enable();
    await updateMetaMaskStatus();
    if (shouldReload) {
      location.reload();
    }
  }
}
window.web3 = web3;
document.onload = updateMetaMaskStatus();
document.querySelector('#connect').addEventListener('click', connectMetaMask);