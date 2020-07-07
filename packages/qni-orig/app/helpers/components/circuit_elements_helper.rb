module Components::CircuitElementsHelper
  def circuit_element_label(*options)
    render 'components/circuit_elements/label', *options
  end
end
