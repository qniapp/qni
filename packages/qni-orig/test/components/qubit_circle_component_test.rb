require 'test_helper'

class QubitCircleComponentTest < ViewComponent::TestCase
  def test_magnitude
    render_inline(QubitCircleComponent.new(magnitude: 50))

    assert_selector('.qubit-circle.qubit-circle--magnitude-50')
  end

  def test_phase
    render_inline(QubitCircleComponent.new(phase: 90))

    assert_selector('.qubit-circle.qubit-circle--phase-90')
  end

  def test_id
    render_inline(QubitCircleComponent.new(id: 'QUBIT-CIRCLE'))

    assert_selector(".qubit-circle[id='QUBIT-CIRCLE']")
  end

  def test_class
    render_inline(QubitCircleComponent.new(class: 'hidden'))

    assert_selector('.qubit-circle.hidden')
  end
end
