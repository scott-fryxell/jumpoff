[Here's a video of realness in action](https://youtu.be/2-FrXdxInYg)

[typography.styl](https://github.com/scott-fryxell/realness/blob/master/src/style/typography.styl) Is the UI foundation for realness. It sets up a baseline that allows me to add UI elements that flow and line up by in a modern typographically natural way.  Text is readable and flows well. the font sized its mapped to the display size. I could go on...

[Item.js](https://github.com/scott-fryxell/realness/blob/master/src/modules/Item.js) is how data is modeled in realness with html. I use the micro data format to describe my models and Item.js to populate VUE objects in the UI. Item uses HTML as the schema to build objects for view to render. Using HTML for persistence Is a natural answer for my requirement for realness to be transparent. data to be stored in human readable format on the client first.

[Storage.js](https://github.com/scott-fryxell/realness/blob/master/src/modules/Storage.js) is how I store information both to local storage and on a storage bucket with firebase.

Item lets me model in html so Storage.js can handle all object storage abstractly.

[Feed.js](https://github.com/scott-fryxell/realness/blob/master/src/views/Feed.vue) realness doesn't store relationship information on the server so I need to build a person's feed on the client. Feed.js makes heavy use of http2; trusting the stream to be able to pull potentially hundreds of files into the client as one query. It's an interesting algorithm that loads up to date profile and post information all from a simple list of phone numbes.

Feed.js, Storage.js and Item.js are all unit tested which you can find the test directory.

I also wanted to point your team to the code for

[copper.is](https://github.com/scott-fryxell/copper.is) which was one of the 5 rails app that I have worked on professionally. I did go pretty deep and hard with rails and still love the idea of working with it. so this code should give your team some confidence that I'll be able to contribute quickly to your stack
