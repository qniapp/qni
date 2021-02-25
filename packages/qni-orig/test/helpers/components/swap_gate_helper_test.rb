require 'test_helper'

class Components::ControlGateHelperTest < ActionView::TestCase
  include Components::GatesHelper
  include IconsHelper

  test 'swap_gate' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(bit: 0, targets: [0, 1]))
      <div class="instruction gate swap-gate gate--connected-with-upper-bit" data-targets="0,1">
        <div class="connection connection--top"></div>
        <div class="connection connection--bottom"></div>
        <div class="gate__shape gate__shape--square">
          #{swap_icon}
        </div>
      </div>
    ERB
  end
end
