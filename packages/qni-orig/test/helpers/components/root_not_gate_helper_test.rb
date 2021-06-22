require 'test_helper'

class Components::RootNotGateHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include IconsHelper

  test 'root_not_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate)
      <div class="gate gate--ifable root-not-gate draggable draggable--circuit" data-gate-popup-target="gate" data-gate-popup-type="if" data-action="mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__body">
          #{root_not_icon class: 'gate-icon'}
        </div>
      </div>
    ERB
  end

  test 'root_not_gate if:' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate(if: 'alice_rn'))
      <div class="gate gate--ifable root-not-gate draggable draggable--circuit" data-if="alice_rn" data-gate-label="if alice_rn" data-gate-popup-target="gate" data-gate-popup-type="if" data-action="mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__body">
          #{root_not_icon class: 'gate-icon'}
        </div>
      </div>
    ERB
  end
end
