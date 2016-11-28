var sodium = require('libsodium-wrappers');

// Usage: node decrypt.js <encrypted text> <public key> <private key>
var args = process.argv.slice(2);
var encrypted = args[0];
var public_key = args[1];
var private_key = args[2];

var decrypted = sodium.to_string(sodium.crypto_box_seal_open(
  sodium.from_hex(encrypted),
  sodium.from_hex(public_key),
  sodium.from_hex(private_key)
));

console.log(decrypted);
