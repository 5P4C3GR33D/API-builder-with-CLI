#! /usr/bin/env node
const fileBuilder = require('./helpers/fileBuilder')
const createFiles = require('./helpers/createFiles')
const directoryBuilder = require('./helpers/directoryBuilder')

const createAPI = () => {
  //Input data from args
  const domain = process.argv[2] || 'Domain'
  const type = process.argv[3] || 'type'
  const path = `${process.cwd()}/functions/api/domains/${domain}`

  //Builds path for files, if it doesn't exist
  directoryBuilder(domain)
  //Creates copies of templates
  createFiles({ domain, path })
  //Changes all test fields to choosen by user
  fileBuilder({ domain, type, path })
}

createAPI()
