# frozen_string_literal: true

require 'application_system_test_case'

class XGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  #       ┌───┐
  # |0⟩───│ X │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', col: 0, row: 0

    put_operation 'X', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 0
  end

  #       ┌───┐
  # |1⟩───│ X │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', col: 0, row: 0

    put_operation 'X', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  test 'hover' do
    x_gate = palette('X')
    x_gate.hover

    assert_outline(x_gate)
  end

  test 'grab' do
    x_gate = palette('X')
    grab x_gate

    assert_no_outline(x_gate)
  end
end
