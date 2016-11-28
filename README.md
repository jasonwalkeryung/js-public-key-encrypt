# Prerequisites
```
brew install node
```

# Install
```
npm install
node generate_keys.js
```
Copy this down somewhere!
Use the public key from `generate_keys.js` and use it on your front-end to encrypt.

On your computer, you can decrypt the text using this command:
```
node decrypt.js <encrypted text> <public key> <private key>
```

# Is this secure?

[Braintree seems to think client-side encryption is smart](https://www.braintreepayments.com/blog/client-side-encryption/).

This example uses a [Javascript port](https://www.npmjs.com/package/libsodium) of [libsodium](https://download.libsodium.org/doc/). More generally, we utilize
[public key encryption](https://en.wikipedia.org/wiki/Public-key_cryptography),
by which we use a _public key_ to encrypt text which can only be decrypted by
a _private key_ which only we control.

# Comments and feedback
This is just a proof of concept. Your feedback is welcome.
