module Components::GatesHelper
  include ComponentsHelper

  def write(value, palette: false)
    render WriteGateComponent.new(value: value, palette: palette)
  end

  def hadamard_gate(*options)
    component 'hadamard_gate', *options
  end

  def not_gate(*options)
    component 'not_gate', *options
  end

  def y_gate(*options)
    component 'y_gate', *options
  end

  def z_gate(*options)
    component 'z_gate', *options
  end

  def phase_gate(*options)
    component 'phase_gate', *options
  end

  def control_gate(*options)
    render ControlGateComponent.new(*options)
  end

  def swap_gate(*options)
    component 'swap_gate', *options
  end

  def root_not_gate(*options)
    component 'root_not_gate', *options
  end

  def rx_gate(*options)
    component 'rx_gate', *options
  end

  def ry_gate(*options)
    component 'ry_gate', *options
  end

  def rz_gate(*options)
    component 'rz_gate', *options
  end

  def measure(value: nil, flag: nil, draggable: true, palette: false, &block)
    render MeasureGateComponent.new(value: value, flag: flag, draggable: draggable, palette: palette), &block
  end
end
