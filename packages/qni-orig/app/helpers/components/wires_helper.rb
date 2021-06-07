module Components::WiresHelper
  def wires(*options, &block)
    component 'wires', *options, &block
  end
end
