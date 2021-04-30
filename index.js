const fs = require("fs");
const genMarkD = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
validateInput = (input) => {
    // input ? true : "dont leave me blank :(";
    if (input) {
        return true;
    }
    return "dont leave me blank :(";
};

const questionArray = [
    {
        message: "Enter the Title of Your Project:",
        name: "title",
        type: "input",
        validate: validateInput,
    },
    {
        name: "description1",
        type: "input",
        message: "What was your motivation for this project?",
        validate: validateInput,
    },
    {
        name: "description2",
        type: "input",
        message: "Why did you build this project?",
        validate: validateInput,
    },
    {
        name: "description3",
        type: "input",
        message: "What problem does it solve?",
        validate: validateInput,
    },
    {
        name: "description4",
        type: "input",
        message: "What did you learn?",
        validate: validateInput,
    },
    {
        message: "What are the steps to install your project?",
        name: "installation",
        type: "input",
        validate: validateInput,
    },
    {
        message: "List your Features (seperate each feature with a comma):",
        name: "features",
        type: "input",
        validate: validateInput,
    },

    {
        message: "What command should the user run for a dependencies install?",
        name: "dependencies",
        type: "input",
        validate: validateInput,
    },
    {
        message: "What licence does the project have?",
        name: "licence",
        choices: ["MIT", "Apache 2.0", "ISC", "None"],
        type: "list",
        validate: validateInput,
    },
    {
        message: "How can people contribute?",
        name: "contributions",
        type: "input",
        validate: validateInput,
    },
];

function askQuestions(questions) {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("createdREADME.md", answers);
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMarkD.generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log("generating readme");
    });
}
function init() {
    askQuestions(questionArray);
}
// console.log(`this is a test ${genMarkD.variableStable}`);
// Function call to initialize app
// init();

init();
