
// generate license section
const generateLicense = licenseText => {
  if (!licenseText) {
    return '';
  }
  return `
  ## License
  ${licenseText}

  `;
};
// generate license link for table of contents
const licenseLink = licenseText => {
  if (!licenseText) {
    return '';
  }
  return `* [License](#license)`;
};

// generate test section
const generateTest = testText => {
  if (!testText) {
    return '';
  }
  return `
  ## Testing
  ${testText}

  `;
};
// generate test link for table of contents
const testLink = testText => {
  if (!testText) {
    return '';
  }
  return `* [Test](#test)`;
};


// generate contribute section
const generateContribute = contributeText => {
  if (!contributeText) {
    return '';
  }
  return `
  ## Contributing
  ${contributeText}

  `;
};
// generate test link for table of contents
const contributeLink = contributeText => {
  if (!contributeText) {
    return '';
  }
  return `* [Contributing](#contributing)`;
};


// generate Authors section
const generateAuthors = authorsArr => {
  return `
    ${authorsArr
      .map(({author, github}) => {
      return `[${author}](${github})`;
      })
      .join(', ')
    }
  `;
};

// generate features section
const generateFeatures = featuresArr => {
  return `
  ## Features
    ${featuresArr
      .map(({features}) => {
      return `
        -${features}
      `;
      })
      .join('')
    }
  `;
};

// generate instructions section
const generateInstructions = instructionsArr => {
  return `
  ## Installation
  ### App or Install Instructions
    ${instructionsArr
      .map(({instructions}) => {
      return `
        -${instructions}
      `;
      })
      .join('')
    }
  `;
};

// generate screenshot section
const generatePics = screenShotArr => {
  return `
  ## Screenshots
    ${screenShotArr
      .map(({caption, alt, link}) => {
      return `
   ### ${caption}
   ![${alt}](${link})

      `;
      })
      .join('')
    }

  `;
};


// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)

  return `# ${data.title}

  ## Credits
  ${data.title} made by ${generateAuthors(data.authors)}

  ## Description
  ${data.description}

  ${data.motivation}

  ## Table of Contents
  * [Credits](#credits)
  * [Description](#description)
  * [Features](#features)
  * [Languages](#languages)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  * [Screenshots](#screenshots)
  ${contributeLink(data.contribute)}
  ${licenseLink(data.license)}
  ${testLink(data.test)}

  ${generateFeatures(data.features)}
  
  ## Languages
  ${data.languages.join(', ')}


  ### Link to the [${data.title} Deployed Page](${data.link})


  ${generateInstructions(data.instructions)}

  ## Usage
  ${data.usage}

  ## Questions
  Find my [GitHub Link](${data.userGithub}) here!
  If you have any questions send me an email at [${data.email}](mailto:${data.email})

  ${generateContribute(data.contribute)}
  
  ${generateTest(data.test)}
  
  ${generateLicense(data.license)}

  ${generatePics(data.screenShot)}

`;
}

module.exports = generateMarkdown;

// ${generateLanguages(data.languages)}



