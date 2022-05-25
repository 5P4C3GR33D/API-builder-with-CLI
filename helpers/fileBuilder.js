const replace = require("replace")

const fileBuilder = ({ domain, type, path }) => {
  const files = [
    `${path}/${domain}.controller.js`,
    `${path}/${domain}.constants.js`,
    `${path}/${domain}.service.js`,
    `${path}/${domain}.route.js`,
    `${path}/index.js`
  ]

  replace({
    regex: "Domain",
    replacement: domain,
    paths: files,
    recursive: true,
    silent: true,
  })
  replace({
    regex: "domain",
    replacement: domain.toLowerCase(),
    paths: files,
    recursive: true,
    silent: true,
  })
  replace({
    regex: "type",
    replacement: type,
    paths: files,
    recursive: true,
    silent: true,
  })
}

module.exports = fileBuilder
