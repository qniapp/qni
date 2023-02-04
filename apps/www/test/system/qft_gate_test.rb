# frozen_string_literal: true

require 'application_system_test_case'

class QftGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  #       ┌───┐
  # |0⟩───│ Q │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', col: 0, row: 0

    put_operation 'QFT', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 0
  end

  #       ┌───┐
  # |1⟩───│ Q │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', col: 0, row: 0

    put_operation 'QFT', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 180
  end

  test 'hover' do
    qft_gate = palette('QFT')
    qft_gate.hover

    assert_outline(qft_gate)
  end

  test 'grab' do
    qft_gate = palette('QFT')
    grab qft_gate

    assert_no_outline(qft_gate)
  end
end
