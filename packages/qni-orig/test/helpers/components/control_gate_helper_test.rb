require 'test_helper'

class Components::ControlGateHelperTest < ActionView::TestCase
  include Components::GatesHelper

  test 'control_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(control_gate)
      <div class="instruction gate control-gate">
        <div class="connection connection--top"></div>
        <div class="connection connection--bottom"></div>
        <div class="gate__shape gate__shape--square">
          <div class="control-gate__dot"></div>
        </div>
      </div>
    ERB
  end
end
