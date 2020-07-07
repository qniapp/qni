module Components::WiresHelper
  # Returns a partial of horizontal wire.
  #
  #   # Activate the wire (default - true)
  #   wire(active: false)
  #
  #   # Connect with upper gate (default - false)
  #   wire(top: true)
  #
  #   # Connect with lower gate (default - false)
  #   wire(bottom: true)
  def wire(*options)
    render 'components/wires/wire', *options
  end

  def circuit_element_wire(*options)
    render 'components/wires/circuit_element_wire', *options
  end

  def top_wire
    render 'components/wires/top_wire'
  end

  def bottom_wire
    render 'components/wires/bottom_wire'
  end

  def down_wire(*options)
    render 'components/gates/down_wire', *options
  end

  def up_wire(*options)
    render 'components/gates/up_wire', *options
  end
end
