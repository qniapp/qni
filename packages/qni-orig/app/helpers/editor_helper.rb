module EditorHelper
  def palette
    render 'palette/palette'
  end

  def editor(*options, &block)
    component 'editor', *options, &block
  end
end
