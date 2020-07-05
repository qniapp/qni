module Components::GatesHelper
  # Returns a partial of the hadamard gate.
  #
  #   # Add a label on top of the gate (default - nil)
  #   hadamard_gate(label: 'if alice_h')
  #
  #   # Disable the gate (default - false)
  #   hadamard_gate(disabled: true)
  #
  #   # Deactivate the wire (default - true)
  #   hadamard_gate(wire_active: false)
  def hadamard_gate(*options)
    render 'components/gates/hadamard_gate', *options
  end

  def not_gate(*options)
    render 'components/gates/not_gate', *options
  end

  def phase_gate(*options)
    render 'components/gates/phase_gate', *options
  end

  def root_not_gate(*options)
    render 'components/gates/root_not_gate', *options
  end

  def swap_gate(*options)
    render 'components/gates/swap_gate', *options
  end

  def control_dot(*options)
    render 'components/gates/control_dot', *options
  end

  def gate_box(*options)
    render 'components/gates/gate_box', *options
  end

  def gate_circle(*options)
    render 'components/gates/gate_circle', *options
  end

  def gate_label(*options)
    render 'components/gates/gate_label', *options
  end

  # read and write

  def write(*options)
    render 'components/gates/write', *options
  end

  def readout(*options)
    render 'components/gates/readout', *options
  end

  # Wires

  def wire(*options)
    render 'components/gates/wire', *options
  end

  def gate_wire(*options)
    render 'components/gates/gate_wire', *options
  end

  def top_wire
    render 'components/gates/top_wire'
  end

  def bottom_wire
    render 'components/gates/bottom_wire'
  end

  def down_wire(*options)
    render 'components/gates/down_wire', *options
  end

  def up_wire(*options)
    render 'components/gates/up_wire', *options
  end
end
