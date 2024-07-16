//user1 changes
const express= require("express");
const app = express();


app.listen(8080,()=>{
    console.log("server is running on port 8080");
});

console.log('hello changes from other user')
console.log('hello');

const a= 'other changes';
const b= 5;
console.log('new changes');

const a= 'vs code';
const b=5;

