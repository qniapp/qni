# frozen_string_literal: true

require 'test_helper'

class QniIconComponentTest < ViewComponent::TestCase
  def test_size
    html = render_inline(QniIconComponent.new(size: 6)).to_html

    assert_match(/width: 1\.5rem;/, html)
    assert_match(/height: 1\.5rem;/, html)
  end
end
