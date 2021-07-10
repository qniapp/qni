module MenuHelper
  def menu(&block)
    component 'menu', &block
  end

  def copy_link
    component 'copy_link'
  end

  def clear_circuit
    component 'clear_circuit'
  end
end
