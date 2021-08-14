module Components::DisplaysHelper
  def bloch_display(draggable: true, palette: false, &block)
    render BlochDisplayComponent.new(draggable: draggable, palette: palette), &block
  end
end
