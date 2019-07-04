const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if (err) throw err;
//     console.log('Folder Created...');
// });

// Create and write into file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//  'Hello world!',
//   err =>{
//     if (err) throw err;
//     console.log('File Created...');
// });
// Rename a filw
fs.rename(path.join(__dirname, '/test', 'helloworld.txt'),
path.join(__dirname, '/test', 'hello.txt'),
  err =>{
    if (err) throw err;
    console.log('File Created...');
});