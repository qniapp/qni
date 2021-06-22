require 'test_helper'

class Components::RwHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include ComponentsHelper
  include GatesHelper
  include IconsHelper

  test 'write 0' do
    assert_dom_equal beautify(<<~ERB), beautify(write(0))
      <div class="gate write-gate draggable draggable--circuit" data-value="0" data-action="mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <div class="gate__body">
          #{ket_icon class: 'gate-icon'}
          <div class="gate-ket-label"></div>
        </div>
      </div>
    ERB
  end

  test 'write 1' do
    assert_dom_equal beautify(<<~ERB), beautify(write(0))
      <div class="gate write-gate draggable draggable--circuit" data-value="0" data-action="mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <div class="gate__body">
          #{ket_icon class: 'gate-icon'}
          <div class="gate-ket-label"></div>
        </div>
      </div>
    ERB
  end

  test 'readout' do
    assert_dom_equal beautify(<<~ERB), beautify(readout)
      <div class="gate readout-gate draggable draggable--circuit" data-gate-popup-type="set" data-action="mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <div class="gate__body">
          #{ket_icon class: 'gate-icon'}
          <div class="gate-ket-label"></div>
        </div>
      </div>
    ERB
  end

  test 'readout (set)' do
    assert_dom_equal beautify(<<~ERB), beautify(readout(set: 'alice_v'))
      <div class="gate readout-gate draggable draggable--circuit" data-set="alice_v" data-gate-label="alice_v" data-gate-popup-type="set" data-action="mousedown->editor#grabDraggable:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <div class="gate__body">
          #{ket_icon class: 'gate-icon'}
          <div class="gate-ket-label"></div>
        </div>
      </div>
    ERB
  end
end
