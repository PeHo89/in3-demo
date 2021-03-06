import In3Client, {ABI, Address} from 'in3-wasm';

const Web3 = require('web3');

const contractAbi: ABI[] = [{"constant":true,"inputs":[],"name":"supportedToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"}],"name":"unregisteringNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"adminKey","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"},{"name":"_url","type":"string"},{"name":"_props","type":"uint192"},{"name":"_weight","type":"uint64"},{"name":"_additionalDeposit","type":"uint256"}],"name":"updateNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"},{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"timestampAdminKeyActive","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_url","type":"string"},{"name":"_props","type":"uint192"},{"name":"_signer","type":"address"},{"name":"_weight","type":"uint64"},{"name":"_depositAmount","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"registerNodeFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxDepositFirstYear","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nodeRegistryData","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalNodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"activateNewLogic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_url","type":"string"},{"name":"_props","type":"uint192"},{"name":"_weight","type":"uint64"},{"name":"_deposit","type":"uint256"}],"name":"registerNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"updateTimeout","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingNewLogic","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newLogic","type":"address"}],"name":"adminUpdateLogic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"}],"name":"returnDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"}],"name":"adminRemoveNodeFromRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"convict","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"},{"name":"_blockhash","type":"bytes32"},{"name":"_blockNumber","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"revealConvict","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"blockRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_blockRegistry","type":"address"},{"name":"_nodeRegistryData","type":"address"},{"name":"_minDeposit","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"url","type":"string"},{"indexed":false,"name":"props","type":"uint192"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"deposit","type":"uint256"}],"name":"LogNodeRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"signer","type":"address"}],"name":"LogNodeConvicted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"url","type":"string"},{"indexed":false,"name":"signer","type":"address"}],"name":"LogNodeRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"url","type":"string"},{"indexed":false,"name":"props","type":"uint192"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"deposit","type":"uint256"}],"name":"LogNodeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"LogOwnershipChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newPendingContract","type":"address"}],"name":"LogNewPendingContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"deposit","type":"uint256"},{"indexed":false,"name":"erc20Token","type":"address"}],"name":"LogDepositReturned","type":"event"}];

const contractAddress: Address = '0x6C095A05764A23156eFD9D603eaDa144a9B1AF33';

async function main() {
    const in3 = new In3Client({
        proof         : 'standard',
        signatureCount: 1,
        requestCount  : 2,
        chainId       : 'mainnet',
        replaceLatestBlock: 10
    });

    try {
        const block: any = await in3.eth.getBlockByNumber('latest');
        console.log(Web3.utils.hexToNumber(block.number));

    } catch (e) {
        printException(e);
    }

    let contract: any;

    try {
        contract = in3.eth.web3ContractAt(contractAbi, contractAddress);

    } catch (e) {
        printException(e);
    }

    try {
        let data: any = await contract.methods.totalNodes().call();
        console.log(data);

    } catch (e) {
        printException(e);
    }
}

function printException(e: any): void {
    console.log('*** EXCEPTION ***');
    console.log(e);
}

main();
