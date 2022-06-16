const fs = require('fs');
const Handlebars = require('handlebars');

const TEMPLATES = require('../templates');

const templateBuilder = ({path, options}) => {
  const data = {
    domain: options?.domain,
    props: options?.props || 'id',
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

  if (!fs.existsSync(`${path}/${options?.domain}.controller.js`)) {
    fs.writeFileSync(`${path}/${options?.domain}.controller.js`, controllerResult)
  }
  if (!fs.existsSync(`${path}/${options?.domain}.service.js`)) {
    fs.writeFileSync(`${path}/${options?.domain}.service.js`, serviceResult)
  }
  if (!fs.existsSync(`${path}/${options?.domain}.route.js`)) {
    fs.writeFileSync(`${path}/${options?.domain}.route.js`, routeResult)
  }
  if (!fs.existsSync(`${path}/${options?.domain}.index.js`)) {
    fs.writeFileSync(`${path}/${options?.domain}.index.js`, indexResult)
  }
}

module.exports = templateBuilder