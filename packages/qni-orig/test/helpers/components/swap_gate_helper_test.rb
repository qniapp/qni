require 'test_helper'

class Components::ControlGateHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include IconsHelper

  test 'swap_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(bit: 0, targets: [0, 1]))
      <div class="gate swap-gate draggable draggable--circuit connectable--upper-bit" data-targets="0,1" data-action="mouseover->editor#enableDnd:passive mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__body">
          #{swap_icon class: 'gate-icon'}
        </div>
      </div>
    ERB
  end
end
