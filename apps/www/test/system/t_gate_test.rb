# frozen_string_literal: true

require 'application_system_test_case'

class TGateTest < ApplicationSystemTestCase
  test 'apply to |0>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    put_operation 'T', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  test 'apply to |1>' do
    visit circuit_path
    put_operation '|1>', col: 0, row: 0

    put_operation 'T', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 45
  end

  test 'hover' do
    visit circuit_path
    sleep 1

    t_gate = palette('T')
    t_gate.hover

    assert_outline(t_gate)
  end

  test 'grab' do
    visit circuit_path
    sleep 1

    t_gate = palette('T')
    grab t_gate

    assert_no_outline(t_gate)
  end
end
