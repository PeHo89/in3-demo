"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var in3_wasm_1 = __importDefault(require("in3-wasm"));
var Web3 = require('web3');
var contractAbi = [{ "constant": true, "inputs": [], "name": "supportedToken", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signer", "type": "address" }], "name": "unregisteringNode", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "adminKey", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "minDeposit", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signer", "type": "address" }, { "name": "_url", "type": "string" }, { "name": "_props", "type": "uint192" }, { "name": "_weight", "type": "uint64" }, { "name": "_additionalDeposit", "type": "uint256" }], "name": "updateNode", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signer", "type": "address" }, { "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "timestampAdminKeyActive", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_url", "type": "string" }, { "name": "_props", "type": "uint192" }, { "name": "_signer", "type": "address" }, { "name": "_weight", "type": "uint64" }, { "name": "_depositAmount", "type": "uint256" }, { "name": "_v", "type": "uint8" }, { "name": "_r", "type": "bytes32" }, { "name": "_s", "type": "bytes32" }], "name": "registerNodeFor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "maxDepositFirstYear", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "nodeRegistryData", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalNodes", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "activateNewLogic", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_url", "type": "string" }, { "name": "_props", "type": "uint192" }, { "name": "_weight", "type": "uint64" }, { "name": "_deposit", "type": "uint256" }], "name": "registerNode", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "updateTimeout", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pendingNewLogic", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newLogic", "type": "address" }], "name": "adminUpdateLogic", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signer", "type": "address" }], "name": "returnDeposit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signer", "type": "address" }], "name": "adminRemoveNodeFromRegistry", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_hash", "type": "bytes32" }], "name": "convict", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signer", "type": "address" }, { "name": "_blockhash", "type": "bytes32" }, { "name": "_blockNumber", "type": "uint256" }, { "name": "_v", "type": "uint8" }, { "name": "_r", "type": "bytes32" }, { "name": "_s", "type": "bytes32" }], "name": "revealConvict", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "blockRegistry", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "VERSION", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_blockRegistry", "type": "address" }, { "name": "_nodeRegistryData", "type": "address" }, { "name": "_minDeposit", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "url", "type": "string" }, { "indexed": false, "name": "props", "type": "uint192" }, { "indexed": false, "name": "signer", "type": "address" }, { "indexed": false, "name": "deposit", "type": "uint256" }], "name": "LogNodeRegistered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "signer", "type": "address" }], "name": "LogNodeConvicted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "url", "type": "string" }, { "indexed": false, "name": "signer", "type": "address" }], "name": "LogNodeRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "url", "type": "string" }, { "indexed": false, "name": "props", "type": "uint192" }, { "indexed": false, "name": "signer", "type": "address" }, { "indexed": false, "name": "deposit", "type": "uint256" }], "name": "LogNodeUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "signer", "type": "address" }, { "indexed": false, "name": "oldOwner", "type": "address" }, { "indexed": false, "name": "newOwner", "type": "address" }], "name": "LogOwnershipChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newPendingContract", "type": "address" }], "name": "LogNewPendingContract", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "signer", "type": "address" }, { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "deposit", "type": "uint256" }, { "indexed": false, "name": "erc20Token", "type": "address" }], "name": "LogDepositReturned", "type": "event" }];
var contractAddress = '0x6C095A05764A23156eFD9D603eaDa144a9B1AF33';
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var in3, block, e_1, contract, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    in3 = new in3_wasm_1.default({
                        proof: 'standard',
                        signatureCount: 1,
                        requestCount: 2,
                        chainId: 'mainnet',
                        replaceLatestBlock: 10
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, in3.eth.getBlockByNumber('latest')];
                case 2:
                    block = _a.sent();
                    console.log(Web3.utils.hexToNumber(block.number));
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    printException(e_1);
                    return [3 /*break*/, 4];
                case 4:
                    try {
                        contract = in3.eth.web3ContractAt(contractAbi, contractAddress);
                    }
                    catch (e) {
                        printException(e);
                    }
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, contract.methods.totalNodes().call()];
                case 6:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 8];
                case 7:
                    e_2 = _a.sent();
                    printException(e_2);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function printException(e) {
    console.log('*** EXCEPTION ***');
    console.log(e);
}
main();
//# sourceMappingURL=index.js.map