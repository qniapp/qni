# frozen_string_literal: true

require 'test_helper'

class Components::GatesHelperTest < ActionView::TestCase
  include IconsHelper

  test 'hadamard gate' do
    assert_dom_equal beautify(<<~ERB), beautify(hadamard_gate)
      <div class="gate hadamard-gate">
        <div class="gate__wire"></div>
        <div class="gate__box">H</div>
      </div>
    ERB
  end

  test 'hadamard gate (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(hadamard_gate(label: 'if alice_h'))
      <div class="gate hadamard-gate">
        <div class="gate__wire"></div>
        <div class="gate__box">H</div>
        <div class="gate__label">if alice_h</div>
      </div>
    ERB
  end

  test 'hadamard gate (disabled)' do
    assert_dom_equal beautify(<<~ERB), beautify(hadamard_gate(disabled: true))
      <div class="gate hadamard-gate gate--disabled">
        <div class="gate__wire"></div>
        <div class="gate__box">H</div>
      </div>
    ERB
  end

  test 'hadamard gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(hadamard_gate(wire_active: false))
      <div class="gate hadamard-gate gate--inactive-wire">
        <div class="gate__wire"></div>
        <div class="gate__box">H</div>
      </div>
    ERB
  end

  test 'not gate' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate)
      <div class="gate not-gate">
        <div class="gate__wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'not gate (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate(label: 'if alice_v'))
      <div class="gate not-gate">
        <div class="gate__wire"></div>
        <div class="gate__circle">#{plus}</div>
        <div class="gate__label">if alice_v</div>
      </div>
    ERB
  end

  test 'not gate (disabled)' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate(disabled: true))
      <div class="gate not-gate gate--disabled">
        <div class="gate__wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'not gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate(wire_active: false))
      <div class="gate not-gate gate--inactive-wire">
        <div class="gate__wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'not gate (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate(top: true))
      <div class="gate not-gate">
        <div class="gate__wire"></div>
        <div class="top-wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'not gate (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(not_gate(bottom: true))
      <div class="gate not-gate">
        <div class="gate__wire"></div>
        <div class="bottom-wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'phase gate' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate(theta: 'π/2'))
      <div class="gate phase-gate">
        <div class="gate__wire"></div>
        <div class="gate__label">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate(theta: 'π/2', top: true))
      <div class="gate phase-gate">
        <div class="gate__wire"></div>
        <div class="top-wire"></div>
        <div class="gate__label gate__label--bottom">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (disabled)' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate(theta: 'π/2', disabled: true))
      <div class="gate phase-gate gate--disabled">
        <div class="gate__wire"></div>
        <div class="gate__label">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate(theta: 'π/2', wire_active: false))
      <div class="gate phase-gate gate--inactive-wire">
        <div class="gate__wire gate__wire--inactive"></div>
        <div class="gate__label">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate(theta: 'π/2', top: true))
      <div class="gate phase-gate">
        <div class="gate__wire"></div>
        <div class="top-wire"></div>
        <div class="gate__label gate__label--bottom">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(phase_gate(theta: 'π/2', bottom: true))
      <div class="gate phase-gate">
        <div class="gate__wire"></div>
        <div class="bottom-wire"></div>
        <div class="gate__label">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'root-not gate' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate)
      <div class="gate root-not-gate">
        <div class="gate__wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'root-not gate (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate(label: 'if alice_v'))
      <div class="gate root-not-gate">
        <div class="gate__wire"></div>
        <div class="gate__box">√N</div>
        <div class="gate__label">if alice_v</div>
      </div>
    ERB
  end

  test 'root-not gate (disabled)' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate(disabled: true))
      <div class="gate root-not-gate gate--disabled">
        <div class="gate__wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'root-not gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate(wire_active: false))
      <div class="gate root-not-gate gate--inactive-wire">
        <div class="gate__wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'root-not gate (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate(top: true))
      <div class="gate root-not-gate">
        <div class="gate__wire"></div>
        <div class="top-wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'root-not gate (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(root_not_gate(bottom: true))
      <div class="gate root-not-gate">
        <div class="gate__wire"></div>
        <div class="bottom-wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'swap gate' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate)
      <div class="gate swap-gate">
        <div class="gate__wire"></div>
        <span>#{swap}</span>
      </div>
    ERB
  end

  test 'swap gate (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(label: 'controlled'))
      <div class="gate swap-gate">
        <div class="gate__wire"></div>
        <span>#{swap}</span>
        <div class="gate__label">controlled</div>
      </div>
    ERB
  end

  test 'swap gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(wire_active: false))
      <div class="gate swap-gate gate--inactive-wire">
        <div class="gate__wire"></div>
        <span>#{swap}</span>
      </div>
    ERB
  end

  test 'swap gate (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(top: true))
      <div class="gate swap-gate">
        <div class="gate__wire"></div>
        <div class="top-wire"></div>
        <span>#{swap}</span>
      </div>
    ERB
  end

  test 'swap gate (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(bottom: true))
      <div class="gate swap-gate">
        <div class="gate__wire"></div>
        <div class="bottom-wire"></div>
        <span>#{swap}</span>
      </div>
    ERB
  end

  test 'control dot' do
    assert_dom_equal beautify(<<~ERB), beautify(control_dot)
      <div class="gate control-dot">
        <div class="gate__wire"></div>
        <div class="control-dot__dot"></div>
      </div>
    ERB
  end

  test 'control dot (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(control_dot(label: 'controlled'))
      <div class="gate control-dot">
        <div class="gate__wire"></div>
        <div class="control-dot__dot"></div>
        <div class="gate__label">controlled</div>
      </div>
    ERB
  end

  test 'control dot (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(control_dot(wire_active: false))
      <div class="gate control-dot gate--inactive-wire">
        <div class="gate__wire"></div>
        <div class="control-dot__dot"></div>
      </div>
    ERB
  end

  test 'control dot (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(control_dot(top: true))
      <div class="gate control-dot">
        <div class="gate__wire"></div>
        <div class="top-wire"></div>
        <div class="control-dot__dot"></div>
      </div>
    ERB
  end

  test 'control dot (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(control_dot(bottom: true))
      <div class="gate control-dot">
        <div class="gate__wire"></div>
        <div class="bottom-wire"></div>
        <div class="control-dot__dot"></div>
      </div>
    ERB
  end

  # Read and write

  test 'write 0' do
    assert_dom_equal beautify(<<~ERB), beautify(write(value: 0))
      <div class="write write--0">
        <div class="write__wire write__wire--left"></div>
        <div class="write__wire write__wire--right"></div>
        <div class="write__body">
          <div>
            |<span class="write__value">0</span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'write 1' do
    assert_dom_equal beautify(<<~ERB), beautify(write(value: 0))
      <div class="write write--0">
        <div class="write__wire write__wire--left"></div>
        <div class="write__wire write__wire--right"></div>
        <div class="write__body">
          <div>
            |<span class="write__value">0</span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'readout 0' do
    assert_dom_equal beautify(<<~ERB), beautify(readout(value: 0))
      <div class="readout readout--0">
        <div class="readout__wire readout__wire--left"></div>
        <div class="readout__wire readout__wire--right"></div>
        <div class="readout__body">
          <div>
            |<span class="readout__value">0</span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'readout 1' do
    assert_dom_equal beautify(<<~ERB), beautify(readout(value: 0))
      <div class="readout readout--0">
        <div class="readout__wire readout__wire--left"></div>
        <div class="readout__wire readout__wire--right"></div>
        <div class="readout__body">
          <div>
            |<span class="readout__value">0</span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'readout 0 with label' do
    assert_dom_equal beautify(<<~ERB), beautify(readout(value: 0, label: 'alice_v'))
      <div class="readout readout--0">
        <div class="readout__wire readout__wire--left"></div>
        <div class="readout__wire readout__wire--right"></div>
        <div class="readout__body">
          <div>
            |<span class="readout__value">0</span>&#10217;
          </div>
        </div>
        <div class="gate__label">alice_v</div>
      </div>
    ERB
  end
end
