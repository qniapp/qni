module GatesHelper
  def control_gate(*options, &block)
    component 'gates/control_gate', *options, &block
  end

  def write(value)
    component 'gates/rw', type: :write, value: value
  end

  def readout(set: nil)
    component 'gates/rw', type: :readout, set: set
  end

  def swap_gate(*options)
    component 'gates/swap_gate', *options
  end

  def down_gate(*options)
    component 'gates/down_gate', *options
  end

  def up_gate(*options)
    component 'gates/up_gate', *options
  end

  def gate_shape(*options)
    component 'gates/shape', *options
  end

  def gate_label(*options)
    component 'gates/label', *options
  end

  def gate_popup(*options)
    component 'gates/popup', *options
  end
end
