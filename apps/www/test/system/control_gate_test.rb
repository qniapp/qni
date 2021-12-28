# frozen_string_literal: true

require 'application_system_test_case'

class ControlGateTest < ApplicationSystemTestCase
  test 'apply to |0>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    control_gate = put_operation('•', col: 1, row: 0)

    assert_disabled control_gate
    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  test 'apply to |1>' do
    visit circuit_path
    put_operation '|1>', col: 0, row: 0

    control_gate = put_operation('•', col: 1, row: 0)

    assert_disabled control_gate
    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 0
  end

  test 'apply CZ to |++>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0
    put_operation '|0>', col: 0, row: 1
    put_operation 'H', col: 1, row: 0
    put_operation 'H', col: 1, row: 1

    control_gate1 = put_operation('•', col: 2, row: 0)
    control_gate2 = put_operation('•', col: 2, row: 1)

    assert_enabled control_gate1
    assert_enabled control_gate2

    assert_wire_bottom control_gate1
    assert_wire_top control_gate2

    assert_qubit_circles 4
    assert_magnitudes Math.sqrt(1.0 / 4), Math.sqrt(1.0 / 4), Math.sqrt(1.0 / 4), Math.sqrt(1.0 / 4)
    assert_phases 0, 0, 0, 180
  end

  test 'apply CZ (•1•) to |+++>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0
    put_operation '|0>', col: 0, row: 1
    put_operation '|0>', col: 0, row: 2
    put_operation 'H', col: 1, row: 0
    put_operation 'H', col: 1, row: 1
    put_operation 'H', col: 1, row: 2

    control_gate1 = put_operation('•', col: 2, row: 0)
    control_gate2 = put_operation('•', col: 2, row: 2)

    assert_enabled control_gate1
    assert_enabled control_gate2

    assert_wire_bottom control_gate1
    assert_wire_top dropzone(2, 1)
    assert_wire_bottom dropzone(2, 1)
    assert_wire_top control_gate2

    assert_qubit_circles 8
    assert_magnitudes Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8)
    assert_phases 0, 0, 0, 0, 0, 180, 0, 180
  end

  test 'apply CZ (•••) to |+++>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0
    put_operation '|0>', col: 0, row: 1
    put_operation '|0>', col: 0, row: 2
    put_operation 'H', col: 1, row: 0
    put_operation 'H', col: 1, row: 1
    put_operation 'H', col: 1, row: 2

    control_gate1 = put_operation('•', col: 2, row: 0)
    control_gate2 = put_operation('•', col: 2, row: 1)
    control_gate3 = put_operation('•', col: 2, row: 2)

    assert_enabled control_gate1
    assert_enabled control_gate2
    assert_enabled control_gate3

    assert_wire_bottom control_gate1
    assert_wire_top control_gate2
    assert_wire_bottom control_gate2
    assert_wire_top control_gate3

    assert_qubit_circles 8
    assert_magnitudes Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8)
    assert_phases 0, 0, 0, 0, 0, 0, 0, 180
  end
end
