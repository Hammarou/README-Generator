
const licenseLink = {
  
'Academic Free License v3.0': {
    abbrName: "AFL 3.0",
    licenseUrl: "https://opensource.org/license/afl-3-0-php",
    badgeUrl: "https://img.shields.io/badge/License-AFL_3.0-orange.svg"
  },

  'Apache license 2.0': {
    abbrName: "Apache 2.0",
    licenseUrl: "https://apache.org/licenses/LICENSE-2.0",
    badgeUrl: "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  },
   
  'Artistic license 2.0': {
    abbrName: "Artistic 2.0",
    licenseUrl: "https://perlfoundation.org/artistic-license-20.html",
    badgeUrl: "https://img.shields.io/badge/License-Artistic_License_2.0-green.svg"
  },

  'Boost Software License 1.0': {
    abbrName: "Boost 1.0",
    licenseUrl: "https://boost.org/LICENSE_1_0.txt",
    badgeUrl: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
  }, 
  
  'BSD 2-clause license': {
    abbrName: "BSD 2-Clause",
    licenseUrl: "https://opensource.org/licenses/BSD-2-Clause",
    badgeUrl: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg"
  }, 
  
  'BSD 3-clause license': {
    abbrName: "BSD 3-Clause",
    licenseUrl: "https://opensource.org/licenses/BSD-3-Clause",
    badgeUrl: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  },
 
  'Creative Commons Zero v1.0 Universal': {
    abbrName: "CC0-1.0",
    licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/",
    badgeUrl: "https://licensebuttons.net/l/zero/1.0/80x15.png"
  },		

  'Eclipse Public License 2.0': {
    abbrName: "EPL-2.0",
    licenseUrl: "https://opensource.org/license/EPL-2.0",
    badgeUrl: "https://img.shields.io/badge/License-EPL_2.0-red.svg"
   },	

  'GNU Affero General Public License v3.0': {
    abbrName: "AGPL v3",
    licenseUrl: "https://gnu.org/licenses/agpl-3.0",
    badgeUrl: "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
  },	

  'GNU General Public License v2.0': {
    abbrName: "GPL v2",
    licenseUrl: "https://gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    badgeUrl: "https://img.shields.io/badge/License-GPL_v2-blue.svg"
  },	

  'GNU General Public License v3.0': {
    abbrName: "GPL v3",
    licenseUrl: "https://gnu.org/licenses/gpl-3.0",
    badgeUrl: "https://img.shields.io/badge/License-GPLv3-blue.svg"
   },	

  'GNU Lesser General Public License v2.1': {
    abbrName: "LGP v2.1",
    licenseUrl: "https://gnu.org/licenses/old-licenses/lgpl-2.1.html",
    badgeUrl: "https://img.shields.io/badge/License-LGPL_v2.1-blue.svg"
    },	

  'GNU Lesser General Public License v3.0': {
    abbrName: "LGPL v3",
    licenseUrl: "https://gnu.org/licenses/lgpl-3.0",
    badgeUrl: "https://img.shields.io/badge/License-LGPL_v3-blue.svg"
    },	
  
  'MIT': {
    abbrName: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    badgeUrl: "https://img.shields.io/badge/License-MIT-yellow.svg"
  },

  'Mozilla Public License 2.0': {
    abbrName: "MPL 2.0",
    licenseUrl: "https://opensource.org/licenses/MPL-2.0",
    badgeUrl: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
  },	

  'The Unlicense': {
    abbrName: "Unlicense",
    licenseUrl: "http://unlicense.org/",
    badgeUrl: "https://img.shields.io/badge/license-Unlicense-blue.svg"
  },	
}


// RETURN LICENSE BADGE BASED ON SELECTED LICENSE
function renderLicenseBadge(license) {
  if (license == "") {
    return ""
  } 

  return `[![License: ${licenseLink[license].abbrName}](${licenseLink[license].badgeUrl})](${licenseLink[license].licenseUrl})`
}


// RETURN LICENSE LINK BASED ON SELECTED LICENSE
function renderLicenseLink(license) {
  if (license == "") {
    return ""
  } 

  const link = licenseLink[license].licenseUrl

  return `[${license}](${link})`
}


// RETURN LICENSE SECTION OF README BASED ON SELECTED LICENSE
function renderLicenseSection(license) {
  if (license == "") {
    return ""
  } 

  return `## License
This is application is covered under the ${renderLicenseLink(license)} license`
}


// GENERATE MARKDOWN FOR README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Contribution](#contribution)  
[Test](#test)  
${data.license == ""? "": "[License](#license)"}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## Questions?
[${data.username}](https://www.github.com/${data.username})

If you any questions, please feel free to email me at [${data.email}](mailto:${data.email})

${renderLicenseSection(data.license)}

`;

}

module.exports = generateMarkdown;
