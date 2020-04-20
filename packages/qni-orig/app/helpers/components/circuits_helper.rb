module Components::CircuitsHelper
  def circuit(&block)
    render 'components/circuit', &block
  end

  def circuit_heading(text:)
    render 'components/circuit/circuit_heading', text: text
  end

  def circuit_pills
    render 'components/circuit/circuit_pills'
  end

  def circuit_preview(*options)
    render 'components/circuit/circuit_preview', *options
  end

  def circuit_code(*options)
    render 'components/circuit/circuit_code', *options
  end

  # Quantum circuit block
  def circuit_block(*options, &block)
    render 'components/circuit/circuit_block', *options, &block
  end

  def circuit_block_divider(*options, &block)
    render 'components/circuit/circuit_block_divider', *options, &block
  end
  alias circuit_header circuit_block_divider

  def circuit_column(*options, &block)
    render 'components/circuit/circuit_column', *options, &block
  end

  def circuit_qubit_label_column(&block)
    render 'components/circuit/circuit_qubit_label_column', &block
  end

  def circuit_qubit_label_multicolumn(*options, &block)
    render 'components/circuit/circuit_qubit_label_multicolumn', *options, &block
  end

  def circuit_breakpoint(*options)
    render 'components/circuit/circuit_breakpoint', *options
  end

  # Labels
  def qubit_label(*options)
    render 'components/circuit/qubit_label', *options
  end

  def qubit_label_multicolumn(*options)
    render 'components/circuit/qubit_label_multicolumn', *options
  end

  def qubit_value_label(*options)
    render 'components/circuit/qubit_value_label', *options
  end

  # Read and write
  def write(*options)
    render 'components/circuit/write', *options
  end

  def readout(*options)
    render 'components/circuit/readout', *options
  end

  # Wires
  def wire(*options)
    render 'components/circuit/wire', *options
  end

  def wire_down(*options)
    render 'components/circuit/wire_down', *options
  end

  def wire_up(*options)
    render 'components/circuit/wire_up', *options
  end

  # Gates
  def hadamard_gate(*options)
    render 'components/circuit/hadamard_gate', *options
  end

  def not_gate(*options)
    render 'components/circuit/not_gate', *options
  end

  def phase_gate(*options)
    render 'components/circuit/phase_gate', *options
  end

  def root_not_gate(*options)
    render 'components/circuit/root_not_gate', *options
  end

  def control_dot(*options)
    render 'components/circuit/control_dot', *options
  end

  # Circle notation
  def circle_notation(*options, &block)
    render 'components/circuit/circle_notation', *options, &block
  end

  def qubit_circle_group(*options, &block)
    render 'components/circuit/qubit_circle_group', *options, &block
  end

  def qubit_circle_group_row(&block)
    render 'components/circuit/qubit_circle_group_row', &block
  end

  def qubit_circle(*options)
    render 'components/circuit/qubit_circle', *options
  end
end
