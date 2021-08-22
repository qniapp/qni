require 'test_helper'

class ControlGateComponentTest < ViewComponent::TestCase
  def test_enabled
    render_inline(ControlGateComponent.new)

    assert_no_selector('control-gate[data-disabled]')
  end

  def test_disabled
    render_inline(ControlGateComponent.new(disabled: true))

    assert_selector('control-gate[data-disabled]')
  end

  def test_no_wire_top_by_default
    render_inline(ControlGateComponent.new)

    assert_no_selector('control-gate[data-wire-top]')
  end

  def test_wire_top
    render_inline(ControlGateComponent.new(wire_top: true))

    assert_selector('control-gate[data-wire-top]')
  end

  def test_wire_top_disabled
    render_inline(ControlGateComponent.new(wire_top_disabled: true))

    assert_selector('control-gate[data-wire-top-disabled]')
  end

  def test_no_wire_bottom_by_default
    render_inline(ControlGateComponent.new)

    assert_no_selector('control-gate[data-wire-bottom]')
  end

  def test_wire_bottom
    render_inline(ControlGateComponent.new(wire_bottom: true))

    assert_selector('control-gate[data-wire-bottom]')
  end

  def test_wire_bottom_disabled
    render_inline(ControlGateComponent.new(wire_bottom_disabled: true))

    assert_selector('control-gate[data-wire-bottom-disabled]')
  end
end
