// TODO: Include packages needed for this application
const fs = require("fs");
const genMarkD = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    { title: "Enter the Title of Your Project" },
    {
        description: [
            "Answer the follwoing questions to create your description",
            "What was your motivation?",
            "Why did you build this project?",
            "What problem does it solve?",
            "What did you learn?",
        ],
    },
    { installation: "What are the steps to install your project" },
    { features: "List your Features (seperate each feature with a comma)" },
    {
        acknowledgements:
            "List all your acknowledgements (seperate each with a comma)",
    },
    "",
    "",
    "",
    "",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    writeToFile("README.md", genMarkD.generateMarkdown);
    console.log(genMarkD.generateMarkdown("test"));
}
console.log(`this is a test ${genMarkD.variableStable}`);
// Function call to initialize app
// init();
