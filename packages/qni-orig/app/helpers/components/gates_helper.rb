module Components::GatesHelper
  # Returns a partial of the swap gate.
  #
  #   # Add a label on top of the gate (default - nil)
  #   swap_gate(label: 'swap')
  #
  #   # Activate the wire (default - true)
  #   swap_gate(wire_active: false)
  #
  #   # Connect with upper gate (default - false)
  #   swap_gate(top: true)
  #
  #   # Connect with lower gate (default - false)
  #   swap_gate(bottom: true)
  def swap_gate(*options)
    render 'components/gates/swap_gate', *options
  end

  def gate_box(*options)
    render 'components/gates/box', *options
  end

  def gate_circle(*options)
    render 'components/gates/circle', *options
  end
end
