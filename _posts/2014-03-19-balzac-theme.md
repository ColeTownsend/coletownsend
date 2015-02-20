---
layout: portfolio
title: Balzac Theme
date: "2014-03-19 13:27:15"
category: "work"
home: true
accent_color: "#6d98cf"
title-color: ""
role: "Designer and Developer"
tags: [web design, front end]
image:
  feature: balzac-code.png
---

## Design
This theme honestly didn't have such a long design process. I wanted to make create a theme that helped people tell stories. I really wanted to emphasize the writing, which translated to an emphasis on the beautiful Calendas Plus. 

### Calendas Plus
Calendas Plus is a wonderful serif typeface designed for longform reading. It has a large x-size and looks beautiful at larger sizes. It tends to read well. 

## For Anchor
Creating this theme in Anchor was relatively easy. I used similar php templates to those for my own website, and merely had to style the front end. I used Semantic.gs, a simple grid _include for Sass projects, and made it percentage based. The result was a fluid grid with min and max widths. I based the entire format on my favorite blogs and content heavy websites, and used the amazing [Calendas Plus](http://www.calendasplus.com/) font. 
<a href="http://gtat.me/balzac" target="_blank">Demo</a>

## For Jekyll
The Jekyll version was a bit more tricky. I was unfamiliar with Liquid, which is basically SASS for HTML. It makes large websites both scalable and incredible fast. I utilized some MIT licensed code from [Michael Rose](http://mademistakes.com/), and  quickly got the hang of it. The end result is a blog theme with exactly the same appearance as the Anchor theme, but without all the backend bloat.
<a href="http://jekyll.gtat.me/" target="_blank">Demo</a>
 

### A note on Jekyll.
Jekyll doesn't use any backend. There is no admin panel or SQL database. It stores all the files in folders. That means the content is static, and caches really well. Instead of loading each page differently for every visitor, it just loads the static file. That takes an enormous load off the servers if there is a lot of traffic.   

<div>
{% include _fluidbox.html grid="full" class="" alt="Home Page" url="balzac-theme-1.jpg" loweres="" cap="Balzac Hero" %}{% include _fluidbox.html grid="full" class="" alt="Home Page" url="balzac-theme-2.png" loweres="" cap="Balzac Longform" %}
</div>
