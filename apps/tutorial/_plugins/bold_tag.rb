# frozen_string_literal: true

module Jekyll
  class BoldTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(_context)
      "<span class=\"font-bold\">#{@text}</span>"
    end
  end
end

Liquid::Template.register_tag('bold', Jekyll::BoldTag)
