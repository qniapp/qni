require 'test_helper'

class CircuitStepComponentTest < ViewComponent::TestCase
  def test_empty_step
    render_inline(CircuitStepComponent.new)

    assert_selector('circuit-step')
  end
end
