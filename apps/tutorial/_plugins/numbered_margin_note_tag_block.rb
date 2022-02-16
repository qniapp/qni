# frozen_string_literal: true

module Jekyll
  class NumberedMarginNoteTagBlock < Liquid::Block
    def initialize(tag_name, note_name, tokens)
      super
      @margin_note_id = "margin-note-#{note_name.strip}"
    end

    def render(context)
      text = super
      %(<label for="#{@margin_note_id}" class="margin-toggle margin-note--numbered"></label>) +
        %(<input type="checkbox" id="#{@margin_note_id}" class="margin-toggle">) +
        %(<span class="margin-note">#{text}</span>)
    end
  end
end

Liquid::Template.register_tag('nmargin_note', Jekyll::NumberedMarginNoteTagBlock)
