const { error } = require('console');
const fs = require('fs');

//sync  --Blockng
// fs.writeFileSync('./test.txt', "Avi is Fatastic coder");

//Asyc    --Non Blocking Req
// fs.writeFile('./test.txt', "Avi is Fatastic coder and designer", err=>{});

//Sync
// const result=fs.readFileSync('./contact.txt',"utf-8");
// console.log(result);

//Async
fs.readFile('./contact.txt', "utf-8", error,reuslt=>{
    if(error){
        console.log("Error bro",error)

    }else{
        console.log(reuslt)
    }
})


// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());