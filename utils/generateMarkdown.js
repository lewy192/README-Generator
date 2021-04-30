// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licence) {
    licence ? `![${licence}](${renderLicenseLink(licence)})` : "";
}

// TODO: Create a function that returns the licence link
// If there is no licence, return an empty string
function renderLicenseLink(licence) {
    if (licence === "None") return "";
    else if (licence === "ISC")
        return "https://img.shields.io/badge/License-ISC-blue.svg";
    else if (licence === "MIT")
        return "https://img.shields.io/badge/License-MIT-green.svg";
    else if (licence === "Apache 2.0")
        return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
}

// TODO: Create a function that returns the licence section of README
// If there is no licence, return an empty string
function renderLicenseSection(licence) {
    return `## Licence
            ${renderLicenseBadge(licence.licence)}`;
}

fullstopCheck = (string) => {
    if (!string[string.length - 1] === ".") return ".";
};

featureList = (features) => {
    let featureArray = features.split(",");
    let formatedFeatures = "";
    for (let feature of featureArray) {
        formatedFeatures += `- ${feature}\n`;
    }

    return formatedFeatures;
};
console.log(featureList("a,b,s,d,x"));

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
${renderLicenseSection(data.licence)}

## Description 
My motivation for this project was: ${
        data.description1 + fullstopCheck(data.description1)
    }
I built this project because ${
        data.description2 + fullstopCheck(data.description2)
    }
This project solves the following problem ${
        data.description3 + fullstopCheck(data.description3)
    }
From this project I learnt ${
        data.description4 + fullstopCheck(data.description4)
    }

## Installation
To install this project ${data.installation}

## Features
${featureList(data.features)}

## Dependencies 
To install dependencies run:\n \`\`\`${data.dependencies}\`\`\`.

## Contributions 
${data.contributions}

`;
}

module.exports = {
    generateMarkdown,
};
