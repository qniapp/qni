require 'test_helper'

class Components::RwHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include ComponentsHelper

  test 'write 0' do
    assert_dom_equal beautify(<<~ERB), beautify(write(0))
      <div class="gate write-gate draggable draggable--circuit" data-value="0" data-action="mouseenter->gate-description#initPopup:passive mousedown->editor#grabDraggableOld:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <div class="gate__body">
          #{render Icons::KetComponent.new}
          <div class="gate-ket-label"></div>
        </div>
      </div>
    ERB
  end

  test 'write 1' do
    assert_dom_equal beautify(<<~ERB), beautify(write(0))
      <div class="gate write-gate draggable draggable--circuit" data-value="0" data-action="mouseenter->gate-description#initPopup:passive mousedown->editor#grabDraggableOld:passive mouseup->editor#releaseDraggable:passive click->editor#ignoreDraggableClick:passive">
        <div class="gate__body">
          #{render Icons::KetComponent.new}
          <div class="gate-ket-label"></div>
        </div>
      </div>
    ERB
  end

  test 'measure' do
    assert_dom_equal beautify(<<~ERB), beautify(measure)
      <measurement-gate class="gate measure-gate draggable draggable--circuit" data-draggable="">
      </measurement-gate>
    ERB
  end

  test 'measure (set)' do
    assert_dom_equal beautify(<<~ERB), beautify(measure(flag: 'alice_v'))
      <measurement-gate class="gate measure-gate draggable draggable--circuit"
                        data-draggable=""
                        data-flag="alice_v">
      </measurement-gate>
    ERB
  end
end
