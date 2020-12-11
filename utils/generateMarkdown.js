// generate installation section
const generateInstall = installText => {
  if (!installText) {
    return '';
  }
  return `

    ## Istallation
    ${installText}

  `;
};

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

// generate screenshot section
const generatePics = screenShotArr => {
  return `

    ## Screenshots
    ${screenShotArr
      .map(({caption, alt, link}) => {
        return `
          ### ${caption}
          [${alt}](${link})

        `;
      })
      .join('')
    }

  `;
};





// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Credits
  ${data.title} made by ${data.author}


  ## Description
  ${data.description}

  ${data.motivation}

  ## Languages
  ${data.languages.join('- ')}

  [${data.title} Deployed Page](${data.link})

  ${generateInstall(data.install)}

  ## Usage
  ${data.usage}

 
  ${generatePics(data.pics)}


  ${generateLicense(data.license)}


`;
}

module.exports = generateMarkdown;
