# frozen_string_literal: true

require 'test_helper'

class Components::GatesHelperTest < ActionView::TestCase
  include ComponentsHelper
  include IconsHelper

  test 'hadamard gate' do
    assert_dom_equal beautify(<<~ERB), beautify(component('hadamard_gate'))
      <div class="circuit-element gate hadamard-gate">
        <div class="circuit-element__wire"></div>
        <div class="gate__box">H</div>
      </div>
    ERB
  end

  test 'hadamard gate (if)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('hadamard_gate', if: 'alice_h'))
      <div class="circuit-element gate hadamard-gate" data-if="alice_h">
        <div class="circuit-element__wire"></div>
        <div class="gate__box">H</div>
        <div class="circuit-element__label">if alice_h</div>
      </div>
    ERB
  end

  test 'hadamard gate (disabled)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('hadamard_gate', disabled: true))
      <div class="circuit-element gate hadamard-gate gate--disabled">
        <div class="circuit-element__wire"></div>
        <div class="gate__box">H</div>
      </div>
    ERB
  end

  test 'hadamard gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('hadamard_gate', wire_active: false))
      <div class="circuit-element gate hadamard-gate circuit-element--inactive-wire">
        <div class="circuit-element__wire"></div>
        <div class="gate__box">H</div>
      </div>
    ERB
  end

  test 'not gate' do
    assert_dom_equal beautify(<<~ERB), beautify(component('not_gate'))
      <div class="circuit-element gate not-gate" data-controls="">
        <div class="circuit-element__wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'not gate (if)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('not_gate', if: 'alice_v'))
      <div class="circuit-element gate not-gate" data-controls="" data-if="alice_v">
        <div class="circuit-element__wire"></div>
        <div class="gate__circle">#{plus}</div>
        <div class="circuit-element__label">if alice_v</div>
      </div>
    ERB
  end

  test 'not gate (disabled)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('not_gate', disabled: true))
      <div class="circuit-element gate not-gate gate--disabled" data-controls="">
        <div class="circuit-element__wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'not gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('not_gate', wire_active: false))
      <div class="circuit-element gate not-gate circuit-element--inactive-wire" data-controls="">
        <div class="circuit-element__wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'not gate (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('not_gate', top: true))
      <div class="circuit-element gate not-gate" data-controls="">
        <div class="circuit-element__wire"></div>
        <div class="top-wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'not gate (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('not_gate', bottom: true))
      <div class="circuit-element gate not-gate" data-controls="">
        <div class="circuit-element__wire"></div>
        <div class="bottom-wire"></div>
        <div class="gate__circle">#{plus}</div>
      </div>
    ERB
  end

  test 'phase gate' do
    assert_dom_equal beautify(<<~ERB), beautify(component('phase_gate', theta: 'π/2'))
      <div class="circuit-element gate phase-gate" data-value="pi/2">
        <div class="circuit-element__wire"></div>
        <div class="circuit-element__label">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('phase_gate', theta: 'π/2', top: true))
      <div class="circuit-element gate phase-gate" data-value="pi/2">
        <div class="circuit-element__wire"></div>
        <div class="top-wire"></div>
        <div class="circuit-element__label circuit-element__label--bottom">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (disabled)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('phase_gate', theta: 'π/2', disabled: true))
      <div class="circuit-element gate phase-gate gate--disabled" data-value="pi/2">
        <div class="circuit-element__wire"></div>
        <div class="circuit-element__label">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('phase_gate', theta: 'π/2', wire_active: false))
      <div class="circuit-element gate phase-gate circuit-element--inactive-wire" data-value="pi/2">
        <div class="circuit-element__wire"></div>
        <div class="circuit-element__label">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('phase_gate', theta: 'π/2', top: true))
      <div class="circuit-element gate phase-gate" data-value="pi/2">
        <div class="circuit-element__wire"></div>
        <div class="top-wire"></div>
        <div class="circuit-element__label circuit-element__label--bottom">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'phase gate (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('phase_gate', theta: 'π/2', bottom: true))
      <div class="circuit-element gate phase-gate" data-value="pi/2">
        <div class="circuit-element__wire"></div>
        <div class="bottom-wire"></div>
        <div class="circuit-element__label">π/2</div>
        <div class="gate__circle">φ</div>
      </div>
    ERB
  end

  test 'root-not gate' do
    assert_dom_equal beautify(<<~ERB), beautify(component('root_not_gate'))
      <div class="circuit-element gate root-not-gate">
        <div class="circuit-element__wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'root-not gate (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('root_not_gate', label: 'if alice_v'))
      <div class="circuit-element gate root-not-gate">
        <div class="circuit-element__wire"></div>
        <div class="gate__box">√N</div>
        <div class="circuit-element__label">if alice_v</div>
      </div>
    ERB
  end

  test 'root-not gate (disabled)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('root_not_gate', disabled: true))
      <div class="circuit-element gate root-not-gate gate--disabled">
        <div class="circuit-element__wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'root-not gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('root_not_gate', wire_active: false))
      <div class="circuit-element gate root-not-gate circuit-element--inactive-wire">
        <div class="circuit-element__wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'root-not gate (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('root_not_gate', top: true))
      <div class="circuit-element gate root-not-gate">
        <div class="circuit-element__wire"></div>
        <div class="top-wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'root-not gate (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('root_not_gate', bottom: true))
      <div class="circuit-element gate root-not-gate">
        <div class="circuit-element__wire"></div>
        <div class="bottom-wire"></div>
        <div class="gate__box">√N</div>
      </div>
    ERB
  end

  test 'swap gate' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate)
      <div class="circuit-element gate swap-gate">
        <div class="circuit-element__wire"></div>
        <span>#{swap}</span>
      </div>
    ERB
  end

  test 'swap gate (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(label: 'controlled'))
      <div class="circuit-element gate swap-gate">
        <div class="circuit-element__wire"></div>
        <span>#{swap}</span>
        <div class="circuit-element__label">controlled</div>
      </div>
    ERB
  end

  test 'swap gate (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(wire_active: false))
      <div class="circuit-element gate swap-gate circuit-element--inactive-wire">
        <div class="circuit-element__wire"></div>
        <span>#{swap}</span>
      </div>
    ERB
  end

  test 'swap gate (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(top: true))
      <div class="circuit-element gate swap-gate">
        <div class="circuit-element__wire"></div>
        <div class="top-wire"></div>
        <span>#{swap}</span>
      </div>
    ERB
  end

  test 'swap gate (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(swap_gate(bottom: true))
      <div class="circuit-element gate swap-gate">
        <div class="circuit-element__wire"></div>
        <div class="bottom-wire"></div>
        <span>#{swap}</span>
      </div>
    ERB
  end

  test 'control dot' do
    assert_dom_equal beautify(<<~ERB), beautify(component('control_dot', targets: [1]))
      <div class="circuit-element gate control-dot" data-targets="1">
        <div class="circuit-element__wire"></div>
        <div class="control-dot__dot"></div>
      </div>
    ERB
  end

  test 'control dot (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('control_dot', targets: [1], label: 'controlled'))
      <div class="circuit-element gate control-dot" data-targets="1">
        <div class="circuit-element__wire"></div>
        <div class="control-dot__dot"></div>
        <div class="circuit-element__label">controlled</div>
      </div>
    ERB
  end

  test 'control dot (inactive wire)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('control_dot', targets: [1], wire_active: false))
      <div class="circuit-element gate control-dot circuit-element--inactive-wire" data-targets="1">
        <div class="circuit-element__wire"></div>
        <div class="control-dot__dot"></div>
      </div>
    ERB
  end

  test 'control dot (connected with upper gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('control_dot', targets: [1], top: true))
      <div class="circuit-element gate control-dot" data-targets="1">
        <div class="circuit-element__wire"></div>
        <div class="top-wire"></div>
        <div class="control-dot__dot"></div>
      </div>
    ERB
  end

  test 'control dot (connected with lower gate)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('control_dot', targets: [1], bottom: true))
      <div class="circuit-element gate control-dot" data-targets="1">
        <div class="circuit-element__wire"></div>
        <div class="bottom-wire"></div>
        <div class="control-dot__dot"></div>
      </div>
    ERB
  end
end
