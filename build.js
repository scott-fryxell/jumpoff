var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    templates  = require('metalsmith-templates');

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .use(markdown())
  .use(templates('handlebars'))
  .build(err => {
    if (err) {
      console.log(err)
    } else {
      console.log('Site build complete!')
    }
  })
