module GatesHelper
  def gate_shape(*options)
    component 'gates/shape', *options
  end

  def gate_popup(*options)
    component 'gates/popup', *options
  end
end
