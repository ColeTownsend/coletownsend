---
layout: post

title: A Quick Guide to Anchor CMS
date: "2014-02-27 12:06:34"
category: journal
accent-color: "#757E8E"
tags: [Anchor CMS, cmd, front end]
---
Below is a condensed version of the install instructions available at [Anchor CMS](http://anchorcms.com/docs/getting-started/installing).
<ul>
<li>Before installing, make sure your platform has the required components to run Anchor. </li>
<li>[Download the latest version of Anchor](http://anchorcms.com/).</li>
<li>In your favourite client, connect to your webhost and upload the files into the public folder. Note: on different hosts, this folder might be called public_html, web, or httpdocs.</li>
<li>Most server should be configured to allow the webserver to read and write to your files and folders, but some do not, in this case you will have to change the permissions on the contents and anchor/config folder to 0777 for the installer to run.</li>
<li>Next you will need to create a database for Anchor to install to, this can be called anything you like. On different host this process might vary, normally you will have access to some sort of GUI client such as PHPMyAdmin or Sequel Pro. You’ll need to ask your webhost if you’re not sure with this.</li>
<li>Navigate your browser to your Anchor installation URL, if you have placed Anchor in a sub directory make sure you append the folder name to the URL: http://mydomainname.com/anchor — <span class="hilite">be sure to replace "mydomainname" with the root domain name to which you have uploaded.</span></li>
</ul>

After you've done all this, you will see a navy blue screen prompting you to install. Run the installer and follow the instructions. 

Using the SQL account (username and password) you created, fill in the various fields listed. From there it is very straight forward.

Finally you will be prompted to create an account. The default is admin. You can use this, or use a any other username. Once you're done, log in and you're ready for your first post!

Stay tuned for Part 2 — [Common Install issues](http://coletownsend.com/posts/anchor-cms-part2)

I also have a little post loop that is free to use, fork, etc over at [GitHub](https://github.com/ColeTownsend/anchor-post-loop).