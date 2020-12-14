

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
  return `* [Testing](#testing)`;
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
      return `
  - [${author}](${github})
    `;
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
  - ${features}
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
  - ${instructions}
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
  
  ![license](https://img.shields.io/badge/License-${data.license.split(' ').join('%20')}-blue?style=for-the-badge)

 
  ## Description
  ${data.description}

  ${data.motivation}


  ## Table of Contents
  
  * [Description](#description)
  * [Features](#features)
  * [Languages](#languages)
  * [Link](#link)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Screenshots](#screenshots)
  * [Questions](#questions)
  * [License](#license)
  ${contributeLink(data.contribute)}
  ${testLink(data.test)}


  ${generateFeatures(data.features)}
  

  ## Languages

  ${data.languages.join(', ')}


  ## Link 

  [${data.title} Deployed Page](${data.link})


  ## Usage

  ${data.usage}


  ${generateInstructions(data.instructions)}


  ${generatePics(data.screenShot)}

  ## Credits

  ${generateAuthors(data.authors)}


  ## Questions

  Find my [GitHub Link](${data.userGithub}) here!
  
  If you have any questions send me an email at [${data.email}](mailto:${data.email})


  ## License

  This project is covered under ${data.license}


  ${generateContribute(data.contribute)}
  

  ${generateTest(data.test)}=

`;
}

module.exports = generateMarkdown;




