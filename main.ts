#! /usr/bin/env node

import inquirer from "inquirer";

const quiz : {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type : "list",
        message:"Which is the capital city of Pakistan?",
        choices :["Lahore", "Faisalabad", "Karachi", "Islamabad"]
    },
    {
        name: "question_2",
        type : "list",
        message:"Who is the founder of Pakistan?",
        choices :["Quaid e Azam", "Allama Iqbal", "Sir Syed", "Fatima Jinnah"]
    },
    {
        name: "question_3",
        type : "list",
        message:"Which city is called city of light?",
        choices :["Multan", "Faisalabad", "Karachi", "Sialkot"]
    },
    {
        name: "question_4",
        type : "list",
        message:"Who inaugurated the State Bank of Pakistan?",
        choices :["Quaid-e-Azam", "Malik Ghulam Muhammad", "Liaquat Ali Khan", "Allama Muhammad Iqbal"]      
    },
    {
        name: "question_5",
        type : "list",
        message:"National code of Pakistan is?",
        choices :["PAK", "PAK1", "PK", "Non of them"]    
    }
]);

let score: number = 0;

switch(quiz.question_1) {
    case "Islamabad":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
            
}
switch(quiz.question_2) {
    case "Quaid e Azam":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
            
}

switch(quiz.question_3) {
    case "Karachi":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
}

switch(quiz.question_4) {
    case "Quaid e Azam":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
}

switch(quiz.question_5) {
    case "PK":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
}
console.log(`score: ${score}`);
