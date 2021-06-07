require 'test_helper'

class Components::PhaseGateHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include IconsHelper

  test 'phase_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate)
      <div class="gate gate--thetable phase-gate" data-controller="gate-popup">
        <svg class="connection overflow-visible" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="connection__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="connection__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__shape gate__shape--circle gate__shape--fill">
          #{phi_icon}
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel"></div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel"></div>
        <div class="gate-popup hidden" data-gate-popup-target="content">
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
      <div class="gate gate--thetable phase-gate" data-theta="pi/2" data-controller="gate-popup">
        <svg class="connection overflow-visible" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="connection__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="connection__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__shape gate__shape--circle gate__shape--fill">
          #{phi_icon}
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel">π/2</div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel">π/2</div>
        <div class="gate-popup hidden" data-gate-popup-target="content">
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
