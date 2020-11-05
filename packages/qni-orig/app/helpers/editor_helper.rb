module EditorHelper
  def editor(*options, &block)
    component 'editor', *options, &block
  end

  def palette(*options, &block)
    component 'editor/palette', *options, &block
  end
end
