module Components::DisplaysHelper
  def bloch_display(palette: false)
    render BlochDisplayComponent.new(palette: palette)
  end
end
