module Jekyll
  class ProjectTag < Liquid::Tag
    def initialize(tag_name, project, tokens)
      super
      arguments = project.split(",")
      @path     = arguments[0].strip
      @project  = arguments[1].strip

      if arguments.size > 2
        @filetype = arguments[2].strip
      else
        @filetype = "jpg"
      end
    end

    def render(context)
      %|<img src="/assets/images/makes/#{@path}/#{@project}.#{@filetype}" retina="/assets/images/makes/#{@path}/#{@project}@2x.#{@filetype}">|
    end

    Liquid::Template.register_tag "project", self
  end
end