require 'test_helper'

class Components::ControlGateHelperTest < ActionView::TestCase
  include Components::GatesHelper

  test 'control_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(control_gate)
      <div class="gate control-gate draggable draggable--circuit" data-action="mouseover-&gt;editor#enableDnd:passive mousedown-&gt;editor#grabDraggable:passive mouseup-&gt;editor#releaseDraggable:passive">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__body">
          #{control_dot_icon class: 'gate-icon'}
        </div>
      </div>
    ERB
  end

  test 'control_gate(targets: [1, 2])' do
    assert_dom_equal beautify(<<~ERB), beautify(control_gate(targets: [1, 2]))
      <div class="gate control-gate draggable draggable--circuit" data-targets="1,2" data-action="mouseover->editor#enableDnd:passive mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__body">
          #{control_dot_icon class: 'gate-icon'}
        </div>
      </div>
    ERB
  end
end
