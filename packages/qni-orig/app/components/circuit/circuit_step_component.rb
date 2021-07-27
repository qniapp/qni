# frozen_string_literal: true

class Circuit::CircuitStepComponent < ViewComponent::Base
  def initialize(shadow: false, shadow_source: false)
    @shadow = shadow
    @shadow_source = shadow_source
  end
end
