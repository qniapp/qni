require 'test_helper'

class WriteGateComponentTest < ViewComponent::TestCase
  def test_value0
    render_inline(WriteGateComponent.new(value: 0))

    assert_selector(".write-gate[data-value='0']")
  end

  def test_value1
    render_inline(WriteGateComponent.new(value: 1))

    assert_selector(".write-gate[data-value='1']")
  end

  def test_invalid_value
    assert_raises ArgumentError do
      WriteGateComponent.new(value: 2)
    end
  end

  def test_palette
    render_inline(WriteGateComponent.new(value: 0, palette: true))

    assert_selector('.write-gate.draggable--palette')
  end

  def test_circuit
    render_inline(WriteGateComponent.new(value: 0, palette: false))

    assert_selector('.write-gate.draggable--circuit')
  end

  def test_default_circuit
    render_inline(WriteGateComponent.new(value: 0))

    assert_selector('.write-gate.draggable--circuit')
  end
end
