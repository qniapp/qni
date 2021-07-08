module Components::GatesHelper
  include ComponentsHelper

  def hadamard_gate(*options, &block)
    component 'gates/hadamard_gate', *options, &block
  end

  def not_gate(*options, &block)
    component 'gates/not_gate', *options, &block
  end

  def root_not_gate(*options, &block)
    component 'gates/root_not_gate', *options, &block
  end

  def phase_gate(*options, &block)
    component 'gates/phase_gate', *options, &block
  end

  def rx_gate(*options)
    component 'gates/rx_gate', *options
  end

  def ry_gate(*options)
    component 'gates/ry_gate', *options
  end

  def control_gate(*options, &block)
    component 'gates/control_gate', *options, &block
  end

  def swap_gate(*options)
    component 'gates/swap_gate', *options
  end

  def write(value, *options)
    component 'gates/write_gate', (options[0] || {}).merge(value: value)
  end

  def measure(*options)
    component 'gates/measure_gate', *options
  end
end
