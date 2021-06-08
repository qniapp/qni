module CircuitHelper
  def circuit(*options, &block)
    component 'circuit', *options, &block
  end

  def circuit_register_group(&block)
    component 'circuit/circuit_register_group', &block
  end

  def circuit_register_group_span(*options, &block)
    component 'circuit/circuit_register_group_span', *options, &block
  end

  def register_label(label)
    component 'circuit/register_label', label: label
  end

  def register_label_span(*options)
    component 'circuit/register_label_span', *options
  end

  def circuit_block(*options, &block)
    component 'circuit/circuit_block', *options, &block
  end

  def circuit_block_divider(*options, &block)
    component 'circuit/circuit_block_divider', *options, &block
  end

  def circuit_step(*options, &block)
    component 'circuit/circuit_step', *options, &block
  end

  def circuit_breakpoint(*options, &block)
    component 'circuit/circuit_breakpoint', *options, &block
  end

  def qubit_label(label)
    component 'circuit/qubit_label', label: label
  end

  def dropzone(*options, &block)
    component 'circuit/dropzone', *options, &block
  end

  def draggable(*options, &block)
    component 'circuit/draggable', *options, &block
  end
end
