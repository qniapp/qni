require 'test_helper'

class Components::ControlGateHelperTest < ActionView::TestCase
  test 'control_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(control_gate)
      <control-gate class="gate control-gate draggable draggable--circuit" data-draggable="" data-action="mouseenter->gate-description#initPopup:passive mousedown->editor#grabDraggableOld:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
      </div>
    ERB
  end
end
