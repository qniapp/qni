require 'test_helper'

class Components::RwHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include ComponentsHelper
  include GatesHelper
  include IconsHelper

  test 'write 0' do
    assert_dom_equal beautify(<<~ERB), beautify(write(0))
      <div class="gate write-gate" data-value="0">
        <div class="gate__shape gate__shape--square">
          #{ket_icon}
          <div class="gate__shape-label"></div>
        </div>
      </div>
    ERB
  end

  test 'write 1' do
    assert_dom_equal beautify(<<~ERB), beautify(write(0))
      <div class="gate write-gate" data-value="0">
        <div class="gate__shape gate__shape--square">
          #{ket_icon}
          <div class="gate__shape-label"></div>
        </div>
      </div>
    ERB
  end

  test 'readout' do
    assert_dom_equal beautify(<<~ERB), beautify(readout)
      <div class="gate readout-gate" data-gate-popup-target="gate" data-gate-popup-type="set">
        <div class="gate__shape gate__shape--square">
          #{ket_icon}
          <div class="gate__shape-label"></div>
        </div>
      </div>
    ERB
  end

  test 'readout (set)' do
    assert_dom_equal beautify(<<~ERB), beautify(readout(set: 'alice_v'))
      <div class="gate readout-gate" data-set="alice_v" data-gate-label="alice_v" data-gate-popup-target="gate" data-gate-popup-type="set">
        <div class="gate__shape gate__shape--square">
          #{ket_icon}
          <div class="gate__shape-label"></div>
        </div>
      </div>
    ERB
  end
end
