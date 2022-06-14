# frozen_string_literal: true

require 'test_helper'

class GateCarouselComponentTest < ViewComponent::TestCase
  def test_gate_carousel_component_renders_default_component
    assert_equal(
      %(<gate-carousel id="gate-carousel" class="block rounded-xl bg-white drop-shadow-xl" data-current-gate-set-index="0">  </gate-carousel>),
      render_inline(GateCarouselComponent.new).to_html.delete("\n")
    )
  end
end
