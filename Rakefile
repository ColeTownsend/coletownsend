require "yaml"
require "fileutils"
require "tmpdir"
require "rubygems"
require "reduce"
require "jekyll"
require "rubygems"
require 'rake'

desc "Remove _site from directory before committing"
task :clean do
  system "rm -rf _site"
  puts "Cleaned!"
end # task :clean

task :default do
  abort "use foreman start to run the project"
end

source_dir  = "source"    # source file directory
public_dir  = "_site"    # compiled site directory

desc "minifies static files"
task :minify do
  puts "## Compressing static assets"
  original = 0.0
  compressed = 0
  Dir.glob("#{public_dir}/**/*.*") do |file|
    case File.extname(file)
      when ".css", ".gif", ".html", ".jpg", ".jpeg", ".png", ".xml"
        puts "processing: #{file}"
        original += File.size(file).to_f
        min = Reduce.reduce(file)
        File.open(file, "w") do |f|
          f.write(min)
        end
        compressed += File.size(file)
      else
        puts "skipping: #{file}"
      end
  end
  puts "Total compression %0.2f\%" % (((original-compressed)/original)*100)
end

desc "Bump version number"
task :bump do
  content = IO.read('_config.yml')
  content.sub!(/^version: (\d+)$/) {|v|
      ver = $1.next
      print "At version #{ver}",:quiet => true
      "version: #{ver}"
  }
  File.open('_config.yml','w') do |f|
    f.write content
  end
end

# serve my drafts up!
desc "Serve drafts."
task :drafts do
  message = ARGV.last
  task message.to_sym do ; end
  system "rake clean"
  system "jekyll build --drafts"
  puts "Now serving your drafts!"
end

# thumbnail images
desc "Create thumbs of images"
task :thumbs do
  message = ARGV.last
  task message.to_sym do ; end
  system "cd images/inline; sips -Z 720 *.png *.jpg --out thumbs"
  system "cd ../"
  puts "Created thumbnail images."
end

# push to github
desc "Push current branch to GH."
task :build do
  message = ARGV.last
  task message.to_sym do ; end
  system "rake bump"
  system "rake clean"
  system "jekyll build"
  system "add"
  system "git commit -am '#{message}'"
  system "git push"
  puts "Pushed latest changes to GitHub!"
end

# push to github
desc "Push current branch to GH."
task :ship do
  message = ARGV.last
  task message.to_sym do ; end
  system "rake bump"
  system "rake clean"
  system "jekyll build"
  system "rake minify"
  system "add"
  system "git commit -am '#{message}'"
  system "git push"
  puts "Pushed latest changes to GitHub!"
end

##################################################
# Build and watch the site (locally)
#################################################

desc "Watch and build our Sass."
task :sass do
  system "sass --watch _sass:css"
end

desc "Build and watch the site."
task :watch do
  system "jekyll serve --watch --config _config.yml,_development_config.yml"
end


##################################################
# Deploy tasks for Travis CI
##################################################

GITHUB_REPONAME = "coletownsend"

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end

desc "Generate and publish blog to master"
task :deploy => [:generate] do
  # Run the :generate task.

  # Create a new tmp dir
  Dir.mktmpdir do |tmp|
     # Copy the contents of the new _site directory into the tmp dir.
    cp_r "_site/.", tmp

    # Move into the tmp dir.
    pwd = Dir.pwd
    Dir.chdir tmp

    system "scp -r * cole@69.89.16.246:/beta-site"
    message = "Site updated at #{Time.now.utc}"

    Dir.chdir pwd
  end
end
