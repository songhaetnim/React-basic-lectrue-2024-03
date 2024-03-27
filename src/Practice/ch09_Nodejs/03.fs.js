const fs = require('fs');

// 1) 동기식으로 읽기
// const file01 = fs.readFileSync('./01.전역변수.js');
// console.log(file01.toString());
// console.log('=================================================');
// const file02 = fs.readFileSync('./02.os.js');
// console.log(file02.toString());
// console.log('=================================================');

// 2) 비동기식으로 읽기 - 아래와 같이 읽으면 안됨
// file01 = fs.readFile('./01.전역변수.js', (err, deta)=>{
//   console.log(deta.toString());
// });
// console.log('=================================================');
// const file02 = fs.readFile('./02.os.js', (err, deta)=>{
//   console.log(deta.toString());
// });

// console.log('=================================================');

// 3) 올바른 비동기식 읽기
fs.readFile('./01.전역변수.js', (err, deta)=>{
  console.log(deta.toString());
  console.log('=================================================');
  fs.readFile('./02.os.js', (err, deta)=>{
    console.log(deta.toString());
    console.log('=================================================');
  });
});

