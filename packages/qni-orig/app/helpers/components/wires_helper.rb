module Components::WiresHelper
  def wire(*options)
    render 'components/gates/wire', *options
  end

  def gate_wire(*options)
    render 'components/gates/gate_wire', *options
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
