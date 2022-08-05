const path = require('path');
const os = require('os');
const fs = require('fs');
const myPath = 'C:/Projects/learning-project/node.js-with-sumit/index.js';


console.log(path.basename(myPath)); //basename only find the last path 
console.log(path.dirname(myPath)); //it will give the whole path
console.log(path.parse(myPath)); //it will give the whole path in object form.
console.log(os.platform()); //is about knowing about os information
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());

fs.writeFileSync('myFile.txt', 'Hello Programmer'); //to creating a new file
fs.appendFileSync('myFile.txt', 'what the hell is going on'); //to append with file content
const data = fs.readFileSync('myFile.txt')//Sync gives sync data type blocking thread
fs.readFile('myFile.txt', (err, data)=>{
    console.log(data.toString());
})//gives async data type. and need a call back function which need to include 2 parameter which one is err and data.

console.log(data);//will give buffer data
console.log(data.toString()); //will give original data




