import { Keypair } from "@solana/web3.js";

const kp = Keypair.generate();

console.log(`Public Key: ${kp.publicKey.toString()}`);
console.log(`Private Key: ${kp.secretKey}`); // No need for $ here