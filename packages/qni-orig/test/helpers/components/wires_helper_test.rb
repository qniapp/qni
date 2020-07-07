# frozen_string_literal: true

require 'test_helper'

class Components::WiresHelperTest < ActionView::TestCase
  test 'wire' do
    assert_dom_equal beautify(<<~ERB), beautify(wire)
      <div class="circuit-element wire">
        <div class="circuit-element__wire"></div>
      </div>
    ERB
  end

  test 'wire (inactive)' do
    assert_dom_equal beautify(<<~ERB), beautify(wire(active: false))
      <div class="circuit-element wire circuit-element--inactive-wire">
        <div class="circuit-element__wire"></div>
      </div>
    ERB
  end

  test 'wire (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(wire(top: true))
      <div class="circuit-element wire">
        <div class="circuit-element__wire"></div>
        <div class="top-wire"></div>
      </div>
    ERB
  end

  test 'wire (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(wire(bottom: true))
      <div class="circuit-element wire">
        <div class="circuit-element__wire"></div>
        <div class="bottom-wire"></div>
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
