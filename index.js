//console.log("Hello, World!");
// REPL - Read Evaluation Print Loop

// const fs = require("fs");
// fs.copyFileSync("file1.txt","file2.txt");


// Node Package Manager - NPM
// Code somebody else wrote so we can use it in our project

// on Hyper, run npm init
// This utility will walk you through creating a package.json file.
// Run: npm install superheroes
// added 3 packages, and audited 4 packages in 1s

const superheroes = require('superheroes');
superheroes.all;
var mySuperheroName = superheroes.random();

// get super villains
// npm install supervillains

const supervillains = require('supervillains');
supervillains.all;
var mySupervillainName = supervillains.random();

console.log("🦸 " + mySuperheroName  + " vs. " + " 🦹 " + mySupervillainName);

// 
