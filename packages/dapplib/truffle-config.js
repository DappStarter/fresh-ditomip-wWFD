require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stone cruise spider unit harvest light army gasp'; 
let testAccounts = [
"0x8d444564774a510458336b645825deae91a29c61683794414101cc97628f08d7",
"0x1a6ee6f34834b33f589baef47099d76aa26cb2357c137eab51e9a7a50187a5b1",
"0xbfcf22119d0bed5c39d69081690b9fb4554179a66954e52b0b45f62901409423",
"0xb11d0338f0824eb69f98dd949d4caa0eb26ed431d7716a7693513618adee538d",
"0x3eebdc6e29b2c1fb7697613bf9be9187b0b0d06c13f725d049c2d0d68c8e4083",
"0x4201320d5d4200b1e9dca0ea85a07e508de017e62a91da0a25430ea39243cacd",
"0x805f9bb1c91d01d7f3f475d1350bdaf086fdb333d3133ab79f1af8ef8ef854c2",
"0xfaee32f55d08fcb7b474da4ff4fef81bdd236224048c8a3d4eb34bea424cd8ee",
"0x98142bf23193a4ef3121d53b5fc1118b20353d6e172bdc6fede19cdd78578869",
"0x225e80bf0a993637e46e5f3f05adbd76b8be79c5a83ef1f823f7c69c3f85c3fb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


