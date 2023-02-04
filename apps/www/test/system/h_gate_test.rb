# frozen_string_literal: true

require 'application_system_test_case'

class HGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  #       ┌───┐
  # |0⟩───│ H │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation 'H', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 0
  end

  #       ┌───┐
  # |1⟩───│ H │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation 'H', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 180
  end

  test 'hover' do
    h_gate = palette('H')
    h_gate.hover

    assert_outline(h_gate)
  end

  test 'grab' do
    h_gate = palette('H')
    grab h_gate

    assert_no_outline(h_gate)
  end
end
