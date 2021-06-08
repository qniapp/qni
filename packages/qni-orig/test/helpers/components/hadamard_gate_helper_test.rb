require 'test_helper'

class Components::HadamardGateHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include IconsHelper

  test 'hadamard_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(hadamard_gate)
      <div class="gate gate--ifable hadamard-gate" data-controller="gate-popup">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__shape gate__shape--square gate__shape--fill">
          #{hadamard_icon}
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel"></div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel"></div>
        <div class="gate-popup hidden" data-gate-popup-target="content">
          <div class="flex flex-col px-2 py-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">if</label>
            <input class="gate-popup__input" type="text">
            <p class="gate-popup__input-error invisible">if の値が正しくありません</p>
          </div>
        </div>
      </div>
    ERB
  end

  test 'hadamard_gate if:' do
    assert_dom_equal beautify(<<~ERB), beautify(hadamard_gate(if: 'alice_h'))
      <div class="gate gate--ifable hadamard-gate" data-if="alice_h" data-controller="gate-popup">
        <svg class="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line class="wires__top" x1="50" y1="0" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
          <line class="wires__bottom" x1="50" y1="100" x2="50" y2="50" stroke-width="2" stroke="currentColor" vector-effect="non-scaling-stroke"></line>
        </svg>
        <div class="gate__shape gate__shape--square gate__shape--fill">
          #{hadamard_icon}
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel">if alice_h</div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel">if alice_h</div>
        <div class="gate-popup hidden" data-gate-popup-target="content">
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
