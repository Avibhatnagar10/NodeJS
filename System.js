// const fs= require('fs');
// const os = require('os');

// console.log(os.cpus().length);



const os = require('os');

const totalMemory = os.totalmem();
const cpus = os.cpus();
console.log("total System memory:")
console.log('Total memory (bytes):', totalMemory);
console.log('CPU Information:');
cpus.forEach((cpu, index) => {
    console.log(`CPU ${index + 0}:`);
    console.log('  Model:', cpu.model);
    console.log('  Speed:', cpu.speed);
});


// const os = require('os');

