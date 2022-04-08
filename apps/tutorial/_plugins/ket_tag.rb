# frozen_string_literal: true

module Jekyll
  class KetTag < Liquid::Tag
    def initialize(tag_name, label, tokens)
      super
      @label = label.strip
    end

    def render(_context)
      "\\(|#{@label}\\rangle\\)"
    end
  end
end

Liquid::Template.register_tag('ket', Jekyll::KetTag)
