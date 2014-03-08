---
layout: post

title: Box Redesign
date: "2014-02-27 12:06:34"
category: journal
accent-color: "#048BCD"
image:
  feature: box-app.svg
---
<img src="http://f.cl.ly/items/3A1K280y3H2Z3j1I0N3Q/Screen%20Shot%202013-03-30%20at%201.04.jpg">

My first step was some minor UX tweaking. I didn't want to radically change the site; it's relatively intuitive to use as I am familiar with CloudApp, Dropbox, and numerous other cloud based services. One thing I noticed was that there were many different functions on the viewing page. When I was revising the viewing page, I wanted to clean it up. My goal was to make the primary function of each page very clear. 

##Viewer
I started with the viewer itself. There was too much going on, as you can see in the crowded image above. I stripped it down to just navigation arrows and a full screen mode. As a user of many cloud apps, I know that I've never used many features from the viewer itself. The navbar provided me with what I needed in an unobtrusive way.

###Document Viewer
I wanted to mimic the functions of Google Doc Viewer and Preview. The current functionality is fine, but it is not accessible. It requires flash and is a bit slow to respond. I found myself frustrated as I scrolled through a longer pdf. The scrolling isn't smooth — it catches frequently. Additionally, the cursor hand moves at a slower speed in the doc viewer than it does out of it. This isn't intuitive and can confuse users. Although I can't reflect these changes in my visual representation, it is something I would address with the dev team. 

Specifically for the visuals, I aimed to minimize what was going on in the document viewer. I feel that it's better to directly be able to influence specifically which page is viewed, rather than clicking through each one individually. 

<img src="{{ site.url }}/images/inline/box-box-doc.png">

<img src="{{ site.url }}/images/inline/box-my-doc.png">

###Video Viewer
I wish I could show an example of the video viewer. Unfortunately it was not included in the free version, a download was necessary for free users. Paid users were allowed a previewer. With the video player, I aimed to keep it consistent with other video players common to cloud viewers. Users are familiar with the layout. 

<img stye="max-width: 100%; height: auto;" src="{{ site.url }}/images/inline/box-video.png">

##Nav
The nav I found to be a bit inconsistent and congested. I had a hard time discerning which icon did what, and was a bit overwhelmed with the amount of icons. I shifted the upgrade feature farthest right, so it remains unobtrusive to the user. I also separated the tasks and messages drop down into two separate features. They aren't peas and carrots or PB&J. Tasks and messages should be separated. Instead of wondering whether it is a message form a coworker or a task from the project manager, the user will know immediately. Simplification is sometimes confused with subtracting. In this case it means simplification meant adding an extra icon to eliminate a step for the user.

<img src="{{ site.url }}/images/inline/box-box-nav.png">

<img src="{{ site.url }}/images/inline/box-my-nav.png">

###Sub Nav
I cleared the sub nav up by using a bit more padding and dropping the font- size. There is already a contrasting color for the sub nav and the visual hierarchy is established without using that big of a font. Slightly smaller font will work just as well and will create a bit more breathing room for the title of the document. I also eliminated the text next to the icons. I feel that icons should already communicate the function of the button. Granted this is highly dependent on the users, and some sort of A/B testing would be helpful to make the decision.

##Comments
The comment area was cluttered with links for various types of comments. The comment area shouldn't be intimidating or hard to read! It should be helpful and fun. At Box, the commenting area is also used to assign tasks, perhaps on a document or a TPS report. 

<img src="{{ site.url }}/images/inline/box-box-comment.png">

<img src="{{ site.url }}/images/inline/box-my-comment.png">