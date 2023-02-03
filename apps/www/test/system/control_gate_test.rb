# frozen_string_literal: true

require 'application_system_test_case'

class ControlGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end
              
  # 
  # |0⟩─────●─────
  #            
  test 'apply to |0>' do
    put_operation '|0>', col: 0, row: 0

    control_gate = put_operation('•', col: 1, row: 0)

    assert_disabled control_gate
    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  # 
  # |1⟩─────●─────
  # 
  test 'apply to |1>' do
    put_operation '|1>', col: 0, row: 0

    control_gate = put_operation('•', col: 1, row: 0)

    assert_disabled control_gate
    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 0
  end

  #       ┌───┐
  # |0⟩───│ H │────●────
  #       └───┘    │
  #       ┌───┐    │
  # |0⟩───│ H │────●────
  #       └───┘         
  test 'apply CZ to |++>' do
    put_operation '|0>', col: 0, row: 0
    put_operation '|0>', col: 0, row: 1
    put_operation 'H', col: 1, row: 0
    put_operation 'H', col: 1, row: 1

    control_gate1 = put_operation('•', col: 2, row: 0)
    control_gate2 = put_operation('•', col: 2, row: 1)

    assert_enabled control_gate1
    assert_enabled control_gate2

    assert_wire_bottom dropzone(2, 0)
    assert_wire_top dropzone(2, 1)

    assert_qubit_circles 4
    assert_magnitudes Math.sqrt(1.0 / 4), Math.sqrt(1.0 / 4), Math.sqrt(1.0 / 4), Math.sqrt(1.0 / 4)
    assert_phases 0, 0, 0, 180
  end

  #       ┌───┐
  # |0⟩───│ H │────●────
  #       └───┘    │
  #       ┌───┐    │
  # |0⟩───│ H │────│────
  #       └───┘    │
  #       ┌───┐    │
  # |0⟩───│ H │────●────
  #       └───┘
  test 'apply CZ (•1•) to |+++>' do
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

    assert_wire_bottom dropzone(2, 0)
    assert_wire_top dropzone(2, 1)
    assert_wire_bottom dropzone(2, 1)
    assert_wire_top dropzone(2, 2)

    assert_qubit_circles 8
    assert_magnitudes Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8)
    assert_phases 0, 0, 0, 0, 0, 180, 0, 180
  end

  #       ┌───┐
  # |0⟩───│ H │────●────
  #       └───┘    │
  #       ┌───┐    │
  # |0⟩───│ H │────●────
  #       └───┘    │
  #       ┌───┐    │
  # |0⟩───│ H │────●────
  #       └───┘
  test 'apply CZ (•••) to |+++>' do
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

    assert_wire_bottom dropzone(2, 0)
    assert_wire_top dropzone(2, 1)
    assert_wire_bottom dropzone(2, 1)
    assert_wire_top dropzone(2, 2)

    assert_qubit_circles 8
    assert_magnitudes Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8), Math.sqrt(1.0 / 8)
    assert_phases 0, 0, 0, 0, 0, 0, 0, 180
  end

  test 'hover' do
    control_gate = palette('•')
    control_gate.hover

    assert_outline(control_gate)
  end

  test 'grab' do
    control_gate = palette('•')
    grab control_gate

    assert_no_outline(control_gate)
  end
end
