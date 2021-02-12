require 'test_helper'

class Components::RwHelperTest < ActionView::TestCase
  include ComponentsHelper
  include GatesHelper

  test 'write 0' do
    assert_dom_equal beautify(<<~ERB), beautify(write(0))
      <div class="instruction rw write" data-value="0">
        <div class="gate__shape gate__shape--rw">
          <div>
            &VerticalLine;<span class="gate__shape-label"></span>&RightAngleBracket;
          </div>
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel"></div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel"></div>
      </div>
    ERB
  end

  test 'write 1' do
    assert_dom_equal beautify(<<~ERB), beautify(write(0))
      <div class="instruction rw write" data-value="0">
        <div class="gate__shape gate__shape--rw">
          <div>
            &VerticalLine;<span class="gate__shape-label"></span>&RightAngleBracket;
          </div>
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel"></div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel"></div>
      </div>
    ERB
  end

  test 'readout' do
    assert_dom_equal beautify(<<~ERB), beautify(readout)
      <div class="instruction rw readout" data-controller="gate-popup">
        <div class="gate__shape gate__shape--rw">
          <div>
            &VerticalLine;<span class="gate__shape-label"></span>&RightAngleBracket;
          </div>
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel"></div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel"></div>
        <div class="gate-popup hidden" data-target="gate-popup.content">
          <div class="flex flex-col px-2 py-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">set</label>
            <input class="gate-popup__input" type="text">
            <p class="gate-popup__input-error invisible">setの値が正しくありません</p>
          </div>
        </div>
      </div>
    ERB
  end

  test 'readout (set)' do
    assert_dom_equal beautify(<<~ERB), beautify(readout(set: 'alice_v'))
      <div class="instruction rw readout" data-set="alice_v" data-controller="gate-popup">
        <div class="gate__shape gate__shape--rw">
          <div>
            &VerticalLine;<span class="gate__shape-label"></span>&RightAngleBracket;
          </div>
        </div>
        <div class="gate__label gate__label--top" data-target="gate-popup.topLabel">alice_v</div>
        <div class="gate__label gate__label--bottom" data-target="gate-popup.bottomLabel">alice_v</div>
        <div class="gate-popup hidden" data-target="gate-popup.content">
          <div class="flex flex-col px-2 py-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">set</label>
            <input class="gate-popup__input" type="text">
            <p class="gate-popup__input-error invisible">setの値が正しくありません</p>
          </div>
        </div>
      </div>
    ERB
  end
end
