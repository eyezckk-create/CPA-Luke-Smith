import crypto from 'node:crypto';
const password=process.argv[2];if(!password){console.error('Usage: node scripts-generate-admin-hash.mjs "your-password"');process.exit(1)}const salt=crypto.randomBytes(16);const hash=crypto.pbkdf2Sync(password,salt,210000,32,'sha256');console.log(`${salt.toString('base64url')}.${hash.toString('base64url')}`);
