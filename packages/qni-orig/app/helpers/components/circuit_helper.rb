module Components::CircuitHelper
  def circuit_step(shadow: false, shadow_source: false, &block)
    render Circuit::CircuitStepComponent.new(shadow: shadow, shadow_source: shadow_source), &block
  end
end
