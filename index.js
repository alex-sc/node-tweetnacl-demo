const nacl = require('tweetnacl');
const decoder = new TextDecoder();

// Generate a random key and nonce
const key = nacl.randomBytes(nacl.secretbox.keyLength);
const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);

// Encrypt the message
const message = new TextEncoder().encode("hello");
const encrypted = nacl.secretbox(message, nonce, key);

// Decrypt the message
const decrypted = nacl.secretbox.open(encrypted, nonce, key);

if (decrypted) {
    console.log("Decrypted message:", decoder.decode(decrypted));
} else {
    console.log("Failed to decrypt");
}
