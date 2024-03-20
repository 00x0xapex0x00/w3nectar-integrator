const w3nectar_integrator = require('w3nectar-integrator');
const w3nectar_gatherer = require('w3nectar-gatherer');
const firebase = require('firebase');
const validator = require('validator');
const xml2js = require('xml2js');
const ethers = require('ethers');
const mocha = require('mocha');
const mongoose = require('mongoose');
const solc = require('solc');
const nodemon = require('nodemon');
const pg = require('pg');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('What is your favorite color? ', color => {
  console.log(`Your favorite color is ${color}`);
  readline.close();
});

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => console.log('An event occurred!'));
myEmitter.emit('event');

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

const buf = Buffer.from('runoob', 'ascii');
console.log(buf.toString('hex'));

const path = require('path');
console.log(`The extension of index.js is ${path.extname('index.js')}`);

// Verify a message signature
const signerAddress = web3.eth.accounts.recover(messageHash, signature.signature);
console.log('Signer address:', signerAddress);

const fs = require('fs');
fs.unlink('file.txt', err => {
  if (err) throw err;
  console.log('File deleted successfully');
});

// Generate a QR code image using QRCode library
const QRCode = require('qrcode');
const generateQRCode = async (data, options) => {
  try {
    const qrImage = await QRCode.toDataURL(data, options);
    return qrImage;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
}
generateQRCode('https://example.com', { errorCorrectionLevel: 'H' })
  .then(qrImage => console.log('QR Code Image:', qrImage));

const dns = require('dns');
dns.lookupService('8.8.8.8', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});