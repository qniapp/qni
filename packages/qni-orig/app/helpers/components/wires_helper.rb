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

  # Returns a partial of vertical wire on top.
  def top_wire
    render 'components/wires/top_wire'
  end

  # Returns a partial of vertical wire on bottom.
  def bottom_wire
    render 'components/wires/bottom_wire'
  end

  # Returns a partial of wire connected to the upper qubit.
  def down_wire
    render 'components/wires/down_wire'
  end

  # Returns a partial of wire connected to the lower qubit.
  #
  #   # Add a controlled wire (default - false)
  #   up_wire(bottom: true)
  def up_wire(*options)
    render 'components/wires/up_wire', *options
  end
end
