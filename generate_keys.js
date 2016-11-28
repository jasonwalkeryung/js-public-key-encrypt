var sodium = require('libsodium-wrappers');
var config = require('config');

// `config.seed` should be a unique 32 character string.
var keys = sodium.crypto_box_seed_keypair(config.seed);
console.log("Public key: "+sodium.to_hex(keys.publicKey));
console.log("Private key: "+sodium.to_hex(keys.privateKey));
console.log("The public key goes into your form.");
console.log("To decrypt:");
console.log("  node decrypt.js <encrypted text> <public key> <private key>");
