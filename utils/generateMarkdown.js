
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

// generate Authors section
const generateAuthors = authorsArr => {
  return `
    ${authorsArr
      .map(({author, github}) => {
      return `
        [${author}](${github})
      `;
      })
      .join(', ')
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
  ${data.title} made by ${generateAuthors(data.author)}

  ## Description
  ${data.description}

  ${data.motivation}

  ## Table of Contents
  * [Credits](#credits)
  * [Description](#description)
  * [Languages](#languages)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  * [Screenshots](#Screenshots)
  * ${licenseLink}

  ## Languages
  ${data.languages.join(', ')}


  ### Link to the [${data.title} Deployed Page](${data.link})


  ${generateInstructions(data.instructions)}

  ## Usage
  ${data.usage}

  ## Questions
  Find my [GitHub Link](${data.userGithub}) here!
  If you have any questions send me an email at [${email}](mailto:${email})

  ${generateLicense(data.license)}

  ${generatePics(data.screenShot)}

`;
}

module.exports = generateMarkdown;

// ${generateLanguages(data.languages)}



