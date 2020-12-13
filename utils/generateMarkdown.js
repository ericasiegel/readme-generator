
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

// generate languages section
// const generateLanguages = languagesArr => {
//   console.log(languagesArr)
//   return `
//   ## Languages
//     ${languagesArr
//       .map(({languages}) => {
//         console.log(languages)
//       return `
//         - ${languages}

//       `;
//       })
//       .join('')
//     }

//   `;
// };

// generate instructions section
const generateInstructions = instructionsArr => {
  return `
  ## App or Install Instructions
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
  ${data.title} made by ${data.author}

  ## Description
  ${data.description}

  ${data.motivation}

  ## Languages
  ${data.languages.join(', ')}


  ### Link to the [${data.title} Deployed Page](${data.link})


  ${generateInstructions(data.instructions)}

  ## Usage
  ${data.usage}

  ${generateLicense(data.license)}

  ${generatePics(data.screenShot)}

`;
}

module.exports = generateMarkdown;

// ${generateLanguages(data.languages)}
