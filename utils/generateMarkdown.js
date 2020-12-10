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

// generate installation section
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
const generatePics = picsArr => {
  return `

    ## Screenshots
    ${picsArr
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


// generate screenshot section
const generateFeatures = featuresArr => {
  return `

    ## Screenshots
    ${featuresArr
      .map(({feature}) => {
        return `
          ## Features
          - ${feature}

        `;


      })
      .join('')
    }

  `;
};



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ${data.motivation}

  ${data.why}

  [${data.title} Deployed Page](${data.link})

  ${generateInstall(data.install)}

  ## Usage
  ${data.usage}


  ${generateFeatures(data.features)}


  ## Credits
  ${data.title} made by ${data.author}

 
  ${generatePics(data.pics)}


  ${generateLicense(data.license)}


`;
}

module.exports = generateMarkdown;
