# frozen_string_literal: true

require 'application_system_test_case'

class RnotGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  #       ┌───┐
  # |0⟩───│√X │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', col: 0, row: 0

    put_operation '√X', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 45, -45
  end

  #       ┌───┐
  # |1⟩───│√X │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', col: 0, row: 0

    put_operation '√X', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases(-45, 45)
  end

  test 'hover' do
    rnot_gate = palette('√X')
    rnot_gate.hover

    assert_outline(rnot_gate)
  end

  test 'grab' do
    rnot_gate = palette('√X')
    grab rnot_gate

    assert_no_outline(rnot_gate)
  end
end
