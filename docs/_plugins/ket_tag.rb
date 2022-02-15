module Jekyll
  class KetTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      "<code>|#{@text}⟩</code>"
    end
  end
end

Liquid::Template.register_tag('ket', Jekyll::KetTag)
