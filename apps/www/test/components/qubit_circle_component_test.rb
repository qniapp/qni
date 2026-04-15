# frozen_string_literal: true

require "test_helper"

class QubitCircleComponentTest < ViewComponent::TestCase
  def test_renders_qubit_circle_element_with_ket_and_amplitude_data
    html = render_inline(QubitCircleComponent.new(ket: 0, amplitude: 1, dark_mode: false)).to_html

    assert_match(/<qubit-circle/, html)
    assert_match(/data-ket="0"/, html)
    assert_match(/data-amplitude="1"/, html)
  end

  def test_sets_dark_mode_data_attribute_when_enabled
    html = render_inline(QubitCircleComponent.new(ket: 1, amplitude: '-i', dark_mode: true)).to_html

    assert_match(/data-ket="1"/, html)
    assert_match(/data-amplitude="-i"/, html)
    assert_match(/data-dark-mode=""/, html)
  end
end
