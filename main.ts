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
        message:"What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        choices :["Explicit", "Implicit", "Number", "Boolean"]
    },
    {
        name: "question_2",
        type : "list",
        message:"Which of the following is NOT a valid TypeScript data type?",
        choices :["Void", "Any", "Tuple", "Dynamic"]
    },
    {
        name: "question_3",
        type : "list",
        message:"How do you denote a variable as readonly in TypeScript?",
        choices :["Static", "Fixed", "Const", "Readonly"]
    },
    {
        name: "question_4",
        type : "list",
        message:" How do you define a custom type in TypeScript??",
        choices :["Type & Interface", "Typedef", "Type assertion", "Type Alias"]      
    },
    {
        name: "question_5",
        type : "list",
        message:"Which of the following TypeScript types can the unknown type be assigned to without type assertion??",
        choices :["Any", "String", "Void", "Number"]    
    }
]);

let score: number = 0;

switch(quiz.question_1) {
    case "Explicit":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
            
}
switch(quiz.question_2) {
    case "Dynamic":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
            
}

switch(quiz.question_3) {
    case "Readonly":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
}

switch(quiz.question_4) {
    case "Type & Interface":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
}

switch(quiz.question_5) {
    case "Any":
        console.log(`1. Correct`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect`);
}
console.log(`score: ${score}`);
