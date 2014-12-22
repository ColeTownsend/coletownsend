---
layout: post
title: "Fresh Install Yosemite to Development: The Easy Way"
date: "2014-12-21 13:06:34"
category: journal
accent_color: "#5a5a5a"
tags: [Yosemite, OSX, development]
image:
  feature: yosemite-setup.png
---

#### Disclaimer
This requires being comfortable in the command line. You've been warned. This is also opinionated to a degree. It sets you up with the following:
<br><br>

* **OSX Yosemite**
* **zsh as default in command line**
* **numerous other settings from [thoughtbot](http://thoughtbot.com) [laptop](https://github.com/thoughtbot/laptop) and [dotfiles](https://github.com/thoughtbot/dotfiles)**
* **all the apps that I use that are listed in the `cask-install.sh`. You can add different ones available via [caskroom.io](http://caskroom.io).**
* Don't install any Appstore apps yet, except for the OSX Yosemite Installer.

## Here's the game plan:

* Backup your laptop, perhaps twice. Sync everything that you can. Also upload your Sublime Text preferences to Dropbox or make it a gist so you can copy it all back.
* Download OSX Yosemite from the App Store.
* Format jump drive "Untitled" of 8gb or more.
* Run a terminal command to format the install for use off of the "Untitled" jum drive.
* Set your startup disk as the jump drive
* Restart
* Format your hard drive so it's clean. There's a little bug with hidden files and node_modules.

### Making the Bootable USB
Download OSX Yosemite from the App Store. It installs to your Applications folder.

#### The USB
Find an 8GB USB drive. You can use a larger one but this only requires about 6GB of space. Open disk utility and erase it. The default settings are just what we need.

#### The Terminal Command
Once you have it formatted run copy and paste the code below into your terminal window. This will prompt you for your password. Give your password and wait for a while. This process takes between 30-45 minutes usually.

```
sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Applications/Install\ OS\ X\ Yosemite.app --nointeraction
```

Once the task is done, you'll have a bootable USB. In Spotlight, type in "Startup Disk". This is a system preference and you should select your USB which is now titled "Install OSX Yosemite".

### Dev Envi Comes First


#### Laptop Script
Go here to thoughtbot's [laptop](https://github.com/thoughtbot/laptop) script and follow their instructions. It's a simple curl command and a couple others.

```
curl --remote-name https://raw.githubusercontent.com/thoughtbot/laptop/master/mac
less mac
bash mac 2>&1 | tee ~/laptop.log
```

#### Dotfiles Script
Per thoughtbot's instructions, run `chsh -s $(which zsh)` to set zsh as your login shell. Then run `git clone git://github.com/thoughtbot/dotfiles.git
` from terminal which will clone the files into your repo. Finally install rcm by running:

```
brew tap thoughtbot/formulae
brew install rcm
```

Then bust out this little command in the terminal: `env RCRC=$HOME/dotfiles/rcrc rcup`. Then to update all you need to do is `rcup` it.

#### Minor Errors and Issues with Dotfiles
I needed to reinstall xCode command line tools and agree to their user agreements because I didn't completely follow the instructions of laptop. Follow the script blindly. *Once the script is finished be sure to check for the dotfiles-local directory.* When I ran the script it didn't create this folder and I needed to kind of infer what I needed to do. This messed up my gitconfig stuff etc. This rcup deal can be run multiple times as well! Pretty neat. What it does is create aliases for all of these files which is cool.


### Installing Apps
Simply run this bash script with `./cask-install.sh`, or fork and edit it for your needs! It can be in any directory, I ran it right from my cloned github repo that I forked from [this guy's dotfiles](https://github.com/sandnuggah/dotfiles). I only used part of his stuff but some other parts are useful such as the OSX defaults.

<br>

<script src="https://gist.github.com/ColeTownsend/aae9a778c08a68e6c3e7.js"></script>
