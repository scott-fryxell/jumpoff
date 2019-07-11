let Metalsmith  = require('metalsmith'),
    stylus      = require('metalsmith-stylus'),
    markdown    = require('metalsmith-markdown'),
    excerpts    = require('metalsmith-excerpts'),
    collections = require('metalsmith-collections'),
    layouts     = require('metalsmith-layouts'),
    partials    = require('metalsmith-discover-partials')
    serve       = require('metalsmith-serve'),
    watch       = require('metalsmith-watch');

Metalsmith(__dirname)
.source('./src')
.destination('../scott-fryxell.github.io/')
.use(stylus())
.use(markdown())
.use(excerpts())
.use(collections({
  posts: {
    pattern: 'posts/**.html',
    sortBy: 'date',
    reverse: true
  }
}))
.use(partials({
  directory: 'src/layouts/partials',
  pattern: /\.hbs$/
}))
.use(layouts({
  default: "default.hbs",
  directory: "src/layouts",
  pattern: "**/*.html"
}))
.use(serve({
  port: 8080,
  verbose: true
}))
.use(watch({
  suppressNoFilesError: true,
  pattern: '**/*',
  livereload: true,
  paths: {
    "${source}/**/*": true
  }
}))
.build(err => {
  if (err) throw err;
  console.log('Site build complete!');
})
