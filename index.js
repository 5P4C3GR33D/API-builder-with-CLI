#! /usr/bin/env node
const fs = require('fs');
const Handlebars = require('handlebars');
const { program } = require('commander');
const pluralize = require('pluralize');

const TEMPLATES = require('./templates');

`
{{domain}} {{apiName}} {{props}} {{method}}
{{lowercaseDomain}} {{uppercaseDomain}} {{pluralizeUppercaseDomain}}
`

program
  .option('-i, --initialize <name>', 'Creates new app with basic structure. UNDER CONSTRUCTION.')
  .option('--domain <name>', 'Name of domain.')
  .option('--api <name>', 'Name of function. Default: getDomain.')
  .option('--method <name>', 'Method of HTTP request. Default: POST.')
  .option('--props [props...]', "Props that will be propagated to function's request body.")

program.parse();

const options = program.opts();

options.domain && function (options) {
  const dir = `backend-app/functions/api/v1/domains/${options?.domain}`
  !fs.existsSync(dir) &&
    fs.mkdirSync(dir, {
      recursive: true
    })

  const data = {
    domain: options?.domain,
    props: options?.props,
    method: options?.method || 'POST',
    apiName: options?.api || `get${options?.domain}`,
    lowercaseDomain: options?.domain?.toLowerCase(),
    uppercaseDomain: options?.domain?.toUpperCase(),
    pluralizeUppercaseDomain: pluralize(options?.domain)?.toUpperCase()
  };

  const controller = TEMPLATES?.controller
  const controllerTemplate = Handlebars.compile(controller);
  const controllerResult = controllerTemplate(data);

  const service = TEMPLATES?.service
  const serviceTemplate = Handlebars.compile(service);
  const serviceResult = serviceTemplate(data);

  const route = TEMPLATES?.route
  const routeTemplate = Handlebars.compile(route);
  const routeResult = routeTemplate(data);

  const index = TEMPLATES?.index
  const indexTemplate = Handlebars.compile(index);
  const indexResult = indexTemplate(data);

  if (!fs.existsSync(`${dir}/${options?.domain}.controller.js`)) {
    fs.writeFileSync(`${dir}/${options?.domain}.controller.js`, controllerResult)
  }
  if (!fs.existsSync(`${dir}/${options?.domain}.service.js`)) {
    fs.writeFileSync(`${dir}/${options?.domain}.service.js`, serviceResult)
  }
  if (!fs.existsSync(`${dir}/${options?.domain}.route.js`)) {
    fs.writeFileSync(`${dir}/${options?.domain}.route.js`, routeResult)
  }
  if (!fs.existsSync(`${dir}/${options?.domain}.index.js`)) {
    fs.writeFileSync(`${dir}/${options?.domain}.index.js`, indexResult)
  }
}(options)

options.initialize && function () {
  console.log('Under construction.')
}
