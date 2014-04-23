require "rubygems"
require 'rake'

desc "Remove _site from directory before committing"
task :clean do
  system "rm -rf _site"
end # task :clean

task :default do
  abort "use foreman start to run the project"
end

desc "Bump version number"
task :bump do
  content = IO.read('_config.yml')
  content.sub!(/^version: (\d+)$/) {|v|
      ver = $1.next
      notify "At version #{ver}",:quiet => true
      "version: #{ver}"
  }
  File.open('_config.yml','w') do |f|
    f.write content
  end
end

desc "Push current branch to GH."
task :ship do
  message = ARGV.last
  task message.to_sym do ; end
  system "rake bump"
  system "jekyll build"
  system "add"
  system "git commit -am '#{message}'"
  system "git push"
  puts "Pushed latest changes to GitHub!"
end

# desc "Minify _site/"
# task :minify do
#   puts "\n## Compressing static assets"
#   original = 0.0
#   compressed = 0
#   Dir.glob("_site/**/*.*") do |file|
#     case File.extname(file)
#       when ".css", ".gif", ".html", ".jpg", ".jpeg", ".js", ".png", ".xml"
#         puts "Processing: #{file}"
#         original += File.size(file).to_f
#         min = Reduce.reduce(file)
#         File.open(file, "w") do |f|
#           f.write(min)
#         end
#         compressed += File.size(file)
#       else
#         puts "Skipping: #{file}"
#       end
#   end
#   puts "Total compression %0.2f\%" % (((original-compressed)/original)*100)
# end