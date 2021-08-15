require 'test_helper'

class MeasurementGateComponentTest < ViewComponent::TestCase
  def test_value0
    render_inline(MeasurementGateComponent.new(value: 0))

    assert_selector("measurement-gate[data-value='0']")
  end

  def test_value1
    render_inline(MeasurementGateComponent.new(value: 1))

    assert_selector("measurement-gate[data-value='1']")
  end

  def test_no_value
    render_inline(MeasurementGateComponent.new)

    assert_no_selector('measurement-gate[data-value]')
  end

  def test_invalid_value
    assert_raises ArgumentError do
      MeasurementGateComponent.new(value: 2)
    end
  end

  def test_flag
    render_inline(MeasurementGateComponent.new(flag: 'alice_h'))

    assert_selector('measurement-gate[data-flag="alice_h"]')
  end

  def test_no_flag
    render_inline(MeasurementGateComponent.new)

    assert_no_selector('measurement-gate[data-flag]')
    assert_no_selector('measurement-gate[data-gate-label]')
  end

  def test_invalid_flag
    assert_raises ArgumentError do
      render_inline(MeasurementGateComponent.new(flag: '_INVALID_FLAG_START_WITH_UNDERLINE'))
    end

    assert_raises ArgumentError do
      render_inline(MeasurementGateComponent.new(flag: 'INVALID FLAG WITH WHITSPACE'))
    end

    assert_raises ArgumentError do
      render_inline(MeasurementGateComponent.new(flag: 'INVALID_FLAG_WITH_SYMBOLS!!!'))
    end
  end

  def test_draggable_false_by_default
    render_inline(MeasurementGateComponent.new)

    assert_no_selector('measurement-gate[data-draggable=""]')
  end

  def test_draggable_false
    render_inline(MeasurementGateComponent.new(draggable: false))

    assert_no_selector('measurement-gate[data-draggable=""]')
  end

  def test_draggable_true
    render_inline(MeasurementGateComponent.new(draggable: true))

    assert_selector('measurement-gate[data-draggable=""]')
  end

  def test_palette
    render_inline(MeasurementGateComponent.new(palette: true))

    assert_selector('measurement-gate.draggable--palette')
  end

  def test_circuit
    render_inline(MeasurementGateComponent.new(palette: false))

    assert_selector('measurement-gate.draggable--circuit')
  end

  def test_default_circuit
    render_inline(MeasurementGateComponent.new)

    assert_selector('measurement-gate.draggable--circuit')
  end
end
