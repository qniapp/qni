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
end
