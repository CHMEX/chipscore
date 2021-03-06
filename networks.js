var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('ffeeddcc'),
  addressVersion: 0x3C,
  privKeyVersion: 188,
  P2SHVersion: 85,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('e7e1309d0a9ac3a7f5a6371595840c4d4eaa3231b07dbffd0eaaf6756e000000'),
    merkle_root: hex('15278503759d76b33489ccb38759a9fd87c2e4c05290dd7c949389af77c4d19b'),
    height: 0,
    nonce: 9250234,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1500000777,
    bits: 503349247,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 57776
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
