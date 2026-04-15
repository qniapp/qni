# frozen_string_literal: true

require "test_helper"

class QubitTransitionComponentTest < ViewComponent::TestCase
  def test_renders_from_and_to_qubits_with_operation
    html = render_inline(QubitTransitionComponent.new(
      from: [1, 0],
      to: [0.7071, 0.7071],
      operation: :h,
      dark_mode: false
    )).to_html

    assert_equal(4, html.scan(/<qubit-circle/).length)
    assert_match(/data-ket="0"/, html)
    assert_match(/data-ket="1"/, html)
    assert_match(/data-amplitude="0\.7071"/, html)
    assert_match(/<h-gate class="qpu-operation-sm"><\/h-gate>/, html)
  end

  def test_passes_value_to_operation_component
    html = render_inline(QubitTransitionComponent.new(
      from: [1, 0],
      to: [1, 0],
      operation: :rz,
      angle: 'π/2',
      value: 't',
      dark_mode: true
    )).to_html

    assert_match(/<rz-gate class="qpu-operation-sm" data-value="t"><\/rz-gate>/, html)
    assert_equal(4, html.scan(/data-dark-mode=""/).length)
  end
end
