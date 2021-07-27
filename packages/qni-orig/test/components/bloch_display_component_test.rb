require 'test_helper'

class BlochDisplayComponentTest < ViewComponent::TestCase
  def test_d
    render_inline(BlochDisplayComponent.new)

    assert_selector(".bloch-display[data-bloch-display-d='0']")
  end

  def test_palette
    render_inline(BlochDisplayComponent.new(palette: true))

    assert_selector('.bloch-display.draggable--palette')
  end

  def test_circuit
    render_inline(BlochDisplayComponent.new(palette: false))

    assert_selector('.bloch-display.draggable--circuit')
  end

  def test_default_circuit
    render_inline(BlochDisplayComponent.new)

    assert_selector('.bloch-display.draggable--circuit')
  end
end
