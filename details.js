// const { error } = require('console');
const fs = require("fs");

console.log('Avi');
//Asysnchronous Req
fs.readFile("./asus.txt","utf-8",(err, result)=>{
   
        console.log(result);
    }

);


//Synchronous Req
// const result = fs.readFileSync("./asus.txt","utf-8");
// console.log(result);


console.log('vai');


//default Thread pool size=4
