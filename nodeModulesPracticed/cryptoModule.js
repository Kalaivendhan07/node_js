// https://chatgpt.com/share/670aa309-1b1c-800b-a617-3b9295a7dd3a ---------------for refer

const crypto = require('crypto');

// Generate a random key and initialization vector (IV)
const key = crypto.randomBytes(32);  // AES-256 requires a 32-byte key
const iv = crypto.randomBytes(16);   // AES requires a 16-byte IV

// Data to encrypt
const message = 'Hello, AES!';

// Encrypt the message
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update(message, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

// Decrypt the message
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);
