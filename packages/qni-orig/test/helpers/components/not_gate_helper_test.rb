require 'test_helper'

class Components::NotGateHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include IconsHelper

  test 'not_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate)
      <div class="gate gate--ifable not-gate draggable draggable--circuit" data-gate-popup-type="if" data-action="mouseover->editor#enableDnd:passive mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__body">
          #{plus_icon class: 'gate-icon'}
        </div>
      </div>
    ERB
  end

  test 'not_gate if:' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate(if: 'alice_v'))
      <div class="gate gate--ifable not-gate draggable draggable--circuit" data-if="alice_v" data-gate-label="if alice_v" data-gate-popup-type="if" data-action="mouseover->editor#enableDnd:passive mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__body">
          #{plus_icon class: 'gate-icon'}
        </div>
      </div>
    ERB
  end
end
