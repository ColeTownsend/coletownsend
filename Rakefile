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

require "reduce"

source_dir  = "source"    # source file directory
public_dir  = "_site"    # compiled site directory

desc "minifies static files"
task :minify do
  puts "## Compressing static assets"
  original = 0.0
  compressed = 0 
  Dir.glob("#{public_dir}/**/*.*") do |file|
    case File.extname(file)
      when ".css", ".gif", ".html", ".jpg", ".jpeg", ".js", ".png", ".xml"
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

# version
desc 'Bump version number'
task :bump, :type do |t, args|
  args.with_defaults(:type => :tiny)
  content = File.read('metadata.rb')

  version_pattern = /(version.*?')(.*?)(')/
  current_version = content.match(version_pattern)[2]
  next_version    = Versionomy.parse(Regexp.last_match[2]).bump(args.type).to_s

  File.write('metadata.rb', content.gsub(version_pattern, "\\1#{next_version}\\3"))

  puts "Successfully bumped from #{current_version} to #{next_version}!"
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

# push to github
desc "Push current branch to GH."
task :ship do
  message = ARGV.last
  task message.to_sym do ; end
  # system "rake bump"
  system "rake clean"
  system "jekyll build"
  system "rake minify"
  system "add"
  system "git commit -am '#{message}'"
  system "git push"
  puts "Pushed latest changes to GitHub!"
end