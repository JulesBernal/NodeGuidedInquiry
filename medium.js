let fs = require('fs');
// import {fs} from 'fs';
const data = fs.readFileSync('planets.txt').toString();
console.log(data);