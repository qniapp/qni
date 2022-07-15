# frozen_string_literal: true

require 'test_helper'

class QpuOperationOnArrowComponentTest < ViewComponent::TestCase
  def test_component_renders_h
    assert_equal(
      %(<h-gate class=\"qpu-operation-sm\"></h-gate>),
      render_inline(QpuOperationOnArrowComponent.new(operation: 'h')).css('h-gate').to_html
    )
  end
end
