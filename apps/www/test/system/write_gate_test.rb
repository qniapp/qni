# frozen_string_literal: true

require 'application_system_test_case'

class WriteGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  #       ┌───┐
  # |0⟩───│ H │───|1⟩
  #       └───┘
  test 'set a qubit state to |1⟩' do
    put_operation '|0⟩', step: 0, bit: 0
    put_operation 'H', step: 1, bit: 0

    put_operation '|1⟩', step: 2, bit: 1

    assert_magnitudes 0, 0, Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 0, 0, 0
  end

  #
  # =|0⟩-
  #
  test '|0⟩ transforms a classical wire into a quantum wire' do
    put_operation '|0⟩', step: 0, bit: 0

    assert_input_wire_classical step: 0, bit: 0
    assert_output_wire_quantum step: 0, bit: 0
  end

  #
  # =|1⟩-
  #
  test '|1⟩ transforms a classical wire into a quantum wire' do
    put_operation '|1⟩', step: 0, bit: 0

    assert_input_wire_classical step: 0, bit: 0
    assert_output_wire_quantum step: 0, bit: 0
  end

  test 'preview the change in input and output wire states' do
    hover_operation '|0⟩', step: 0, bit: 0

    assert_input_wire_classical step: 0, bit: 0
    assert_output_wire_quantum step: 0, bit: 0
  end

  test 'hover' do
    write0_gate = palette('|0⟩')
    write0_gate.hover
    assert_outline write0_gate

    write1_gate = palette('|1⟩')
    write1_gate.hover
    assert_outline write1_gate
  end

  test 'grab' do
    write0_gate = palette('|0⟩')
    grab write0_gate
    assert_no_outline write0_gate

    write1_gate = palette('|1⟩')
    grab write1_gate
    assert_no_outline write1_gate
  end
end
