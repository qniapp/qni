# frozen_string_literal: true

module GatePopupHelper
  def gate_popup(*options)
    component 'gate_popup', *options
  end

  def angle_slider
    render 'components/angle_slider'
  end
end
