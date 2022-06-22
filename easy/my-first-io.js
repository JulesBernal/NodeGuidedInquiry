const fs = require("fs");
let y = fs.readFileSync(process.argv[2]);
const str = y.toString();
const chr=str.split("\n").length-1;
let sum=0;
for (let i=0;i<chr.length;i++){
    if(chr[i]==='\n'){
        sum++;
    }
}
console.log(chr);