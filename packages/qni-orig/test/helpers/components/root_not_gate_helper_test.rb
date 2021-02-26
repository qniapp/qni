require 'test_helper'

class Components::RootNotGateHelperTest < ActionView::TestCase
  include Components::GatesHelper

  test 'root_not_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate)
      <div class="gate gate--ifable root-not-gate" data-controller="gate-popup">
        <div class="connection connection--top"></div>
        <div class="connection connection--bottom"></div>
        <div class="gate__shape gate__shape--square gate__shape--fill">
          √N
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel"></div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel"></div>
        <div class="gate-popup hidden" data-target="gate-popup.content">
          <div class="flex flex-col px-2 py-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">if</label>
            <input class="gate-popup__input" type="text">
            <p class="gate-popup__input-error invisible">if の値が正しくありません</p>
          </div>
        </div>
      </div>
    ERB
  end

  test 'root_not_gate if:' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate(if: 'alice_rn'))
      <div class="gate gate--ifable root-not-gate" data-if="alice_rn" data-controller="gate-popup">
        <div class="connection connection--top"></div>
        <div class="connection connection--bottom"></div>
        <div class="gate__shape gate__shape--square gate__shape--fill">
          √N
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel">if alice_rn</div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel">if alice_rn</div>
        <div class="gate-popup hidden" data-target="gate-popup.content">
          <div class="flex flex-col px-2 py-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">if</label>
            <input class="gate-popup__input" type="text">
            <p class="gate-popup__input-error invisible">if の値が正しくありません</p>
          </div>
        </div>
      </div>
    ERB
  end
end
