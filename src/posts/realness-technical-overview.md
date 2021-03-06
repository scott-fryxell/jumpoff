---
title: Realness, a technical overview
date: 2019-04-01
---
I publish my My [feed](/feed.html) here so you can see what It's like and also keep track of what each release is. With this post I want to give a technical overview of how I'm building realness.

Realness.online, is a local events-based social network. Realness lets you socialize without having to worry about the software manipulating your vanity. User information is stored on the device, saving only posts and a simple profile on the network. Secure by design, It is also serverless, responsive, and progressive. Realness is designed to be launched from the home screen and runs as fast as a native application. Realness has no revenue share obligations, also by design.

Data is described in semantic HTML and objects are brought into javascript via [Item.js](https://github.com/scott-fryxell/realness/blob/master/src/modules/Item.js). It is based on the [microdata](https://www.w3.org/TR/microdata/) format.

I use Item.js to populate VUE objects in the UI and [Storage.js](https://github.com/scott-fryxell/realness/blob/master/src/modules/Storage.js) to save them to local storage. Item.js and Storage.js together are my answer to flux and Vuex. Javascript functions as a controller preserving MVC pattern. All Models are described in HTML.

Activity, Posts, Profile, Avatar, Relationships, Events, Posters have all been successfully modeled using Storage.js and Item.js and I haven't been experiencing the pain that most Single Page Apps experience as their applications grow more complex.

Realness doesn't store relationship information on the server, so a person's feed is created on the client. [Feed.js](https://github.com/scott-fryxell/realness/blob/master/src/views/Feed.vue) makes heavy use of HTTP2 streams. I am able to pull potentially hundreds of files into the client as one query. It's an interesting algorithm that loads up to date profile and post information from a simple list of phone numbers. Feed is performant  (sorting the feed by date is currently averaging 5 milliseconds) and has plenty of headroom for optimization as the user base grows.

[Typography.styl](https://github.com/scott-fryxell/realness/blob/master/src/style/typography.styl) is the UI foundation for realness. It sets up a baseline look and feel that allows me to add UI elements and trust they will align in a consistent and natural way. Text is readable and flows well: there is heavy use of a [mixin](https://github.com/scott-fryxell/realness/blob/master/src/style/mixins/between.styl) I wrote that uses the slope-intercept form to scale UI elements to the display size (font size, line length, form inputs, images, menus etc).
