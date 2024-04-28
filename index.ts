#! /usr/bin/env node

import inquirer from "inquirer";

let answer =await inquirer.prompt([{message:"Please enter your sentence",type:"input",name:"sentence"}])

let word =answer.sentence.trim().split(" ")
console.log(word)
console.log(`"Your Word count is ${word.length}"`)