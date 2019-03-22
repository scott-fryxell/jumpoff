I am a full stack web application engineer. The bulk of my career has been spent working with startups.  I have been immersed in software development, the arts, and counterculture for 20 years, and am successful in technology because I execute.

With this perspective, I offer authenticity and a highly creative environment for the people that I work with to explore problems and make decisions. I am looking for a team focused on elegant solutions executed to the highest possible standards.

I have mentored, hired and built long lasting teams with minimal  resources. My soft skills are highly developed and I can connect closely with diverse purpose driven organizations.

My most recent technical project, Realness.online, is a local events-based social network. Realness lets you socialize without having to worry about the software manipulating your vanity. User information is stored on the device, saving only posts and a simple profile on the network. Secure by design, It is also serverless, responsive, and progressive. Realness is designed to be launched from the home screen and runs as fast as a native application. Realness has no revenue share obligations, also by design.

## Social Networking On The Edge
March 22nd 2019

Data is described in semantic html and objects are brought into javascript via [Item.js](https://github.com/scott-fryxell/realness/blob/master/src/modules/Item.js). It is based on the the [microdata](https://www.w3.org/TR/microdata/) format.

I use Item.js to populate VUE objects in the UI and [Storage.js](https://github.com/scott-fryxell/realness/blob/master/src/modules/Storage.js) to save them to local storage. Item.js and Storage.js together are my answer to flux and Vuex. Javascript functions as a controller preserving MVC pattern. All Models are described in HTML.

Activity, Posts, Profile, Avatar, Relationships, Events, Posters have all been successfully modeled using Storage.js and Item.js and I haven't been experiencing the pain that most Single Page Apps experience as their applications grow more complex.

Realness doesn't store relationship information on the server so  a person's feed is created on the client. [Feed.js](https://github.com/scott-fryxell/realness/blob/master/src/views/Feed.vue) makes heavy use of HTTP2 trusting the stream to be able to pull potentially hundreds of files into the client as one query. It's an interesting algorithm that loads up to date profile and post information that starts from a simple list of phone numbers.

[Typography.styl](https://github.com/scott-fryxell/realness/blob/master/src/style/typography.styl) is the UI foundation for realness. It sets up a baseline look and feel that allows me to add UI elements and trust they will align in a consistent and natural way. Text is readable and flows well: there is heavy use of a [mixin](https://github.com/scott-fryxell/realness/blob/master/src/style/mixins/between.styl) I wrote that uses the slope intercept form to scale UI elements to the display size (font size, line length, form inputs, images, menus etc).

[Copper.is](https://github.com/scott-fryxell/copper.is) was a startup I founded and Led from 2010 to 2014. It was a rails app with a double sided marketplace that makes heavy use of relational algebra. Copper was more of a traditional web application. I open sourced it when I closed the company down and I think it's an excellent example of my full stack developer chops.

# Realness
January, 01 2019

It's just, I hate it when rich kids win and everyone just assumes they know better.

It's been my experience that rich kids are as narrow minded and average as the rest of us. They are fallible. They guess and use their resources to paper over any mistakes that bubble to the surface. Depth is not natural for them.

Basically, what I'm saying is – **They don't know how to help.**

I walked away from startup land in 2015. I could not handle how fake people had become. I felt abandoned and disconnected. I no longer believed in technology as a force for good. So I spent a couple years in the reject bin. I couldn't do it, I couldn't pretend the march of bullshit through my industry was healthy. The tech gold rush had won. All I saw around me was greed and artificial caring. It wasn't worth it anymore.

The people that did care had been conned by the Harvard kids into using their talent for Mark's 'vision' of a connected world. There was nothing to do but get off the ride.

Then we got the president fakery deserves. A man who could only win in a social media landscape that advantaged him.

His whole point was that everyone is a liar, all the rich kids in charge were fake too, selfish too, in it for themselves. You might as well hire an honest fake to call bullshit. Looking at my industry I couldn't say that he was wrong.

That pissed me off, and so I got to work. [Realness](https://realness.online) is what I came up with.

### What you can do with Realness
- You can post updates
- You can sign up with your phone
- You can take a selfie and create an avatar
- You can look for people you may know on Realness
- You can add those people  
- You can view a feed of what those people want to say

There are no likes. There are no friend counts, There are no comments. You text your friends directly when they post something that moves you.

### What I know about Realness from using it
- I post a lot less
- What I do post is genuine
- I check it a lot less
- I text when I relate to what's in my feed
- I feel connected

Realness is a social network that's more like a tool than a popularity contest. It uses your phone number, so you get messaging, group text built in.  All of your information stays on your phone. I don't even know who your friends are. What is shared on the network are your posts and a simple profile for people to find you.

Go to [realness.online](https://realness.online) on your phone to use it, and [patreon.com/scottfryxell](https://patreon.com/scottfryxell) to give it a helping hand

# Real talk

The other social networks are designed to manipulate users into maximum engagement. They take manipulation as gospel. Their logic is as follows: We are a business that makes money from advertising. Advertising is manipulation. We're just doing what our users accept is happening.

Thats how you justify yourself into a nice home and a sick Audi.

This is not the internet that I signed up for. What I saw back in the 90's were people that wanted to build an internet for everyone. I hate to say it now, but I believed in that internet.

We wanted to make knowledge available so that everyone could feel what it's like to live an intellectually engaged life. That future seemed thrilling to me – a poor kid, with nowhere to go.

We don't have that world today do we? Even though the best and the brightest have had a generation and a half to figure it out. They just went for that advertising money, and told us our music was worth 0.086 pennies a listen.  – hoarding all the opportunity for themselves; shrinking the pie so that they can get a bigger slice.  

I don't want my social network to use my desire for connection against me.

I don't want be socially engineered. I don't want to become a walking resume. I don't want a social network overflowing with anxiety where the most dramatic people have the loudest voices.

I want a social network to tell everyone that I am okay, That I need time alone, but I love them and that our time together buoys me.

I want to use my social network to know where to be and when to be there. I want genuine feelings being shared between people that I know. And I want them to feel that even when we are alone we can be together.

[https://realness.online](https://realness.online)

[https://patreon.com/scottfryxell](https://patreon.com/scottfryxell)
