module Components::GateDescriptionHelper
  def gate_description(*options, &block)
    component 'gate_description', *options, &block
  end

  def qubit_circle_ket(value)
    component 'qubit_circle_ket', value: value
  end

  def gate_arrow(&block)
    component 'gate_arrow', &block
  end
end
