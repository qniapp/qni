require 'test_helper'

class Components::PhaseGateHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include IconsHelper

  test 'phase_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate)
      <div class="gate gate--phiable phase-gate draggable draggable--circuit" data-gate-popup-type="phi" data-action="mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__body">
          #{phi_icon class: 'gate-icon'}
        </div>
      </div>
    ERB
  end

  test 'phase_gate phi:' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate(phi: 'π/2'))
      <div class="gate gate--phiable phase-gate draggable draggable--circuit" data-phi="pi/2" data-gate-label="π/2" data-gate-popup-type="phi" data-action="mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__body">
          #{phi_icon class: 'gate-icon'}
        </div>
      </div>
    ERB
  end
end
