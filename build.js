let Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    layouts    = require('metalsmith-layouts'),
    stylus     = require('metalsmith-stylus')
    serve      = require('metalsmith-serve'),
    watch      = require('metalsmith-watch');

Metalsmith(__dirname)
.source('./src')
.destination('../scott-fryxell.github.io/')
.use(stylus())
.use(markdown())
.use(layouts({
  default: "default.hbs",
  directory: "src/layouts",
  pattern: "**/*.html"
}))
.use(serve({
  port: 9000,
  verbose: true
}))
.use(watch({
  cache: false,
  pattern: '**/*',
  livereload: true,
  paths: {
    "${source}/**/*": true,
    "${source}/layouts/**/*": "**/*"
  }
}))
.build(err => {
  if (err) throw err;
  console.log('Site build complete!');
})
