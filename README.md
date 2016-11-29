# Prerequisites
```
brew install node
```

# Install
From `js-public-key-encrypt` (i.e., this directory), run
```
npm install
```
This downloads the dependencies for the command line tools.

# Generate your public and private keys

1. `cp config/default.json.example config/default.json`
  1. Open `config/default.json`, e.g. `vi config/default.json`
  2. Change the `seed` value to your own 32-character value.
2. Generate the public and private key: `node generate_keys.js`
3. Copy the output somewhere!

# Encrypt

[index.html](index.html) provides an example of using the public key from
`generate_keys.js` to encrypt a text field. In practice, you wouldn't have
to encrypt it on each keystroke, I did it that way for demonstration purposes.

# Decrypt
## From the command line
On your computer, you can decrypt the text using this command:
```
node decrypt.js <encrypted text> <public key> <private key>
```
## In the browser
You can use the same function from decrypt.js in the browser, but you have to be
careful about how you provide the keys. I wouldn't embed the private key anywhere
in a page. Instead, I would either:
* store it in localStorage (`localStorage.setItem('the_private_key', <private key value>)`)
* use a text field to decrypt it live (not unlike our demo, it will feel like a
  spy movie)

# Is this secure?

[Braintree seems to think client-side encryption is smart](https://www.braintreepayments.com/blog/client-side-encryption/).

We utilize
[public key encryption](https://en.wikipedia.org/wiki/Public-key_cryptography),
by which we use a _public key_ to encrypt text which can only be decrypted by
a _private key_ which only we control. The data you encrypt is secure as long
as the private key is secure.

This example uses a [Javascript port](https://www.npmjs.com/package/libsodium) of [libsodium](https://download.libsodium.org/doc/), which wraps the
[NaCl](http://nacl.cr.yp.to) library, which uses an elliptic curve function
to decrypt the data in a way that makes it prohibitively difficult to discover
the private key by brute force.

# Comments and feedback
Your feedback is welcome.
