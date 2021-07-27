require 'test_helper'

class Circuit::CircuitBreakpointComponentTest < ViewComponent::TestCase
  def test_circuit_breakpoint
    render_inline(Circuit::CircuitBreakpointComponent.new)

    assert_selector('.circuit-breakpoint')
  end
end
