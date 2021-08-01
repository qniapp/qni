require 'test_helper'

class MeasureGateComponentTest < ViewComponent::TestCase
  def test_value0
    render_inline(MeasureGateComponent.new(value: 0))

    assert_selector("measure-gate[data-value='0']")
  end

  def test_value1
    render_inline(MeasureGateComponent.new(value: 1))

    assert_selector("measure-gate[data-value='1']")
  end

  def test_no_value
    render_inline(MeasureGateComponent.new)

    assert_no_selector('measure-gate[data-value]')
  end

  def test_invalid_value
    assert_raises ArgumentError do
      MeasureGateComponent.new(value: 2)
    end
  end

  def test_flag
    render_inline(MeasureGateComponent.new(flag: 'alice_h'))

    assert_selector('measure-gate[data-flag="alice_h"][data-gate-label="alice_h"]')
  end

  def test_no_flag
    render_inline(MeasureGateComponent.new)

    assert_no_selector('measure-gate[data-flag]')
    assert_no_selector('measure-gate[data-gate-label]')
  end

  def test_invalid_flag
    assert_raises ArgumentError do
      render_inline(MeasureGateComponent.new(flag: '_INVALID_FLAG_START_WITH_UNDERLINE'))
    end

    assert_raises ArgumentError do
      render_inline(MeasureGateComponent.new(flag: 'INVALID FLAG WITH WHITSPACE'))
    end

    assert_raises ArgumentError do
      render_inline(MeasureGateComponent.new(flag: 'INVALID_FLAG_WITH_SYMBOLS!!!'))
    end
  end

  def test_draggable_false_by_default
    render_inline(MeasureGateComponent.new)

    assert_no_selector('measure-gate[data-draggable=""]')
  end

  def test_draggable_false
    render_inline(MeasureGateComponent.new(draggable: false))

    assert_no_selector('measure-gate[data-draggable=""]')
  end

  def test_draggable_true
    render_inline(MeasureGateComponent.new(draggable: true))

    assert_selector('measure-gate[data-draggable=""]')
  end

  def test_palette
    render_inline(MeasureGateComponent.new(palette: true))

    assert_selector('measure-gate.draggable--palette')
  end

  def test_circuit
    render_inline(MeasureGateComponent.new(palette: false))

    assert_selector('measure-gate.draggable--circuit')
  end

  def test_default_circuit
    render_inline(MeasureGateComponent.new)

    assert_selector('measure-gate.draggable--circuit')
  end
end
