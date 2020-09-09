# frozen_string_literal: true

require 'test_helper'

class Components::WiresHelperTest < ActionView::TestCase
  include ComponentsHelper

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

  test 'top wire' do
    assert_dom_equal beautify(<<~ERB), beautify(top_wire)
      <div class="top-wire"></div>
    ERB
  end

  test 'bottom wire' do
    assert_dom_equal beautify(<<~ERB), beautify(bottom_wire)
      <div class="bottom-wire"></div>
    ERB
  end

  test 'up wire' do
    assert_dom_equal beautify(<<~ERB), beautify(component('up_gate'))
      <div class="circuit-element up-gate">
        <div class="up-gate__line"></div>
      </div>
    ERB
  end

  test 'up wire (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('up_gate', bottom: true))
      <div class="circuit-element up-gate">
        <div class="up-gate__line"></div>
        <div class="up-gate__bottom"></div>
      </div>
    ERB
  end

  test 'down wire' do
    assert_dom_equal beautify(<<~ERB), beautify(component('down_gate'))
      <div class="circuit-element down-gate">
        <div class="down-gate__line"></div>
      </div>
    ERB
  end
end
