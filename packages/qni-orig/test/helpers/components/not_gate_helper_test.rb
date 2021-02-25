require 'test_helper'

class Components::NotGateHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include IconsHelper

  test 'not_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate)
      <div class="instruction instruction--ifable gate not-gate" data-controller="gate-popup">
        <div class="connection connection--top"></div>
        <div class="connection connection--bottom"></div>
        <div class="gate__shape gate__shape--circle gate__shape--fill">
          #{plus_icon}
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

  test 'not_gate if:' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate(if: 'alice_v'))
      <div class="instruction instruction--ifable gate not-gate" data-if="alice_v" data-controller="gate-popup">
        <div class="connection connection--top"></div>
        <div class="connection connection--bottom"></div>
        <div class="gate__shape gate__shape--circle gate__shape--fill">
          #{plus_icon}
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel">if alice_v</div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel">if alice_v</div>
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
