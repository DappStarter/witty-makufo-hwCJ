require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strategy radar punch proud hundred light army gentle'; 
let testAccounts = [
"0x65c895586fc99fc343c3276ad2c38187b3b03a60350ebb17bae1caa204cf2edd",
"0x735c125f94ccdf61bab76060c6a0d3cf324ccf20cc22f288f0d5df662c4d26ae",
"0x677407cbf9c3c59ecf403636fc08cd268cd515a63949668e9566b56dd8299e61",
"0xf0ea051e6baaa66e60c8d0884a3252619d53622bdcb0c96762c0112ac7c5841d",
"0x284277835ff09cd6ded5fb4cadb718c24a6e0d0c3b1aa1b2a0ca642de5476e8d",
"0x6d27d6eb6a189d16bde3e9815e5f93c49821ce546116f937167a909af2c4b714",
"0x74adf6b0ee880b9ffa1b5c71158cf0023001b50aa4853904977e8ab88e6c934d",
"0xa359035744fed5de68ee70faf155cf919f208f331783c200799d7bcae5a86d52",
"0x9ebf3d2f064ce312c535b5dad4f58fe57919446d88bff29bf2268f6126934241",
"0x9c9337d73216bb6908deec84ab7a0792cc5fffab140f0b31cbf5f79773c4daff"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

