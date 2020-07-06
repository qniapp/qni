# frozen_string_literal: true

require 'test_helper'

class Components::WiresHelperTest < ActionView::TestCase
  test 'wire' do
    assert_dom_equal beautify(<<~ERB), beautify(wire)
      <div class="wire">
        <div class="gate__wire"></div>
      </div>
    ERB
  end

  test 'wire with top link' do
    assert_dom_equal beautify(<<~ERB), beautify(wire(top: true))
      <div class="wire">
        <div class="gate__wire"></div>
        <div class="top-wire"></div>
      </div>
    ERB
  end

  test 'wire with bottom link' do
    assert_dom_equal beautify(<<~ERB), beautify(wire(bottom: true))
      <div class="wire">
        <div class="gate__wire"></div>
        <div class="bottom-wire"></div>
      </div>
    ERB
  end

  test 'wire with both top and bottom link' do
    assert_dom_equal beautify(<<~ERB), beautify(wire(top: true, bottom: true))
      <div class="wire">
        <div class="gate__wire"></div>
        <div class="top-wire"></div>
        <div class="bottom-wire"></div>
      </div>
    ERB
  end

  test 'inactive wire' do
    assert_dom_equal beautify(<<~ERB), beautify(wire(active: false))
      <div class="wire">
        <div class="gate__wire gate__wire--inactive"></div>
      </div>
    ERB
  end

  test 'up wire' do
    assert_dom_equal beautify(<<~ERB), beautify(up_wire)
      <div class="up-wire">
        <div class="up-wire__line"></div>
      </div>
    ERB
  end

  test 'up wire with bottom link' do
    assert_dom_equal beautify(<<~ERB), beautify(up_wire(bottom: true))
      <div class="up-wire">
        <div class="up-wire__line"></div>
        <div class="up-wire__bottom"></div>
      </div>
    ERB
  end

  test 'down wire' do
    assert_dom_equal beautify(<<~ERB), beautify(down_wire)
      <div class="down-wire">
        <div class="down-wire__line"></div>
      </div>
    ERB
  end
end
