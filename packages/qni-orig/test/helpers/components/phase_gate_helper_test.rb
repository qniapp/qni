require 'test_helper'

class Components::PhaseGateHelperTest < ActionView::TestCase
  include Components::GatesHelper

  test 'phase_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate)
      <div class="instruction instruction--thetable gate phase-gate" data-controller="gate-popup">
        <div class="connection connection--top"></div>
        <div class="connection connection--bottom"></div>
        <div class="gate__shape gate__shape--circle gate__shape--fill">
          𝟇
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel"></div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel"></div>
        <div class="gate-popup hidden" data-target="gate-popup.content">
          <div class="flex flex-col px-2 py-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">theta</label>
            <input class="gate-popup__input" type="text">
            <p class="gate-popup__input-error invisible">theta の値が正しくありません</p>
          </div>
        </div>
      </div>
    ERB
  end

  test 'phase_gate theta:' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate(theta: 'π/2'))
      <div class="instruction instruction--thetable gate phase-gate" data-theta="pi/2" data-controller="gate-popup">
        <div class="connection connection--top"></div>
        <div class="connection connection--bottom"></div>
        <div class="gate__shape gate__shape--circle gate__shape--fill">
          𝟇
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel">π/2</div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel">π/2</div>
        <div class="gate-popup hidden" data-target="gate-popup.content">
          <div class="flex flex-col px-2 py-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">theta</label>
            <input class="gate-popup__input" type="text">
            <p class="gate-popup__input-error invisible">theta の値が正しくありません</p>
          </div>
        </div>
      </div>
    ERB
  end
end
