module Components::GatePopupHelper
  def gate_popup(*options)
    component 'gate_popup', *options
  end

  def angle_slider
    render 'angle_slider/angle_slider'
  end
end
