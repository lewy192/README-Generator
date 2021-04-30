function renderLicenseLink(licence) {
    if (licence === "None") return "";
    else if (licence === "ISC")
        return "https://img.shields.io/badge/License-ISC-green.svg";
    else if (licence === "MIT")
        return "https://img.shields.io/badge/License-MIT-green.svg";
    else if (licence === "Apache 2.0")
        return "https://img.shields.io/badge/License-Apache%202.0-green.svg";
}

function renderLicenseSection(licence) {
    return `## Licence\n![${licence}](${renderLicenseLink(licence)})`;
}

fullstopCheck = (string) => {
    string = string.trim();
    if (!(string[string.length - 1] === ".")) return ".";
    return " ";
};

featureList = (features) => {
    let featureArray = features.split(",");
    let formatedFeatures = "";
    for (let feature of featureArray) {
        formatedFeatures += `- ${feature}${fullstopCheck(feature)}\n`;
    }

    return formatedFeatures;
};
console.log(featureList("a,b,s,d,x"));

function generateMarkdown(data) {
    console.log(fullstopCheck(data.description1));
    return `# ${data.title} 
${renderLicenseSection(data.licence)}

## Description 

\nMy motivation for this project was: ${data.description1}${fullstopCheck(
        data.description1
    )}
    
\nI built this project because ${data.description2}${fullstopCheck(
        data.description2
    )}
    
\nThis project solves the following problem ${data.description3}${fullstopCheck(
        data.description3
    )}
    
\nFrom this project I learnt ${data.description4}${fullstopCheck(
        data.description4
    )}

## Contents

- [Installation](#installation)
- [Licence](#licence)
- [Features](#features)
- [Contributions](#contributions)
    

## Installation

To install this project ${data.installation}${fullstopCheck(data.installation)}

## Features

${featureList(data.features)}

## Dependencies 

To install dependencies run:\n \`\`\`${data.dependencies}\`\`\`

## Contributions 

${data.contributions}${fullstopCheck(data.contributions)}

`;
}

module.exports = {
    generateMarkdown,
};
