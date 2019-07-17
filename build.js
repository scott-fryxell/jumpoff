let Metalsmith  = require('metalsmith'),
    stylus      = require('metalsmith-stylus'),
    markdown    = require('metalsmith-markdown'),
    excerpts    = require('metalsmith-excerpts'),
    collections = require('metalsmith-collections'),
    layouts     = require('metalsmith-layouts'),
    partials    = require('metalsmith-discover-partials')
    serve       = require('metalsmith-serve'),
    watch       = require('metalsmith-watch');

const marked = require('marked');
const markdown_renderer = new marked.Renderer()

markdown_renderer.image = function (href, title, text) {
return `
<figure>
  <img src="${href}" alt="${title}" title="${title}" />
  <figcaption>
    <p>${text}</p>
  </figcaption>
</figure>`;
};

Metalsmith(__dirname)
.source('./src')
.destination('../scott-fryxell.github.io/')
.use(stylus())
.use(markdown({
  smartLists: true,
  renderer: markdown_renderer,
}))
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
  pattern: "**/*.html",
  engineOptions: {
    "cache": false
  }
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
