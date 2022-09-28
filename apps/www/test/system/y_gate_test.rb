# frozen_string_literal: true

require 'application_system_test_case'

class YGateTest < ApplicationSystemTestCase
  test 'apply to |0>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    put_operation 'Y', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 90
  end

  test 'apply to |1>' do
    visit circuit_path
    put_operation '|1>', col: 0, row: 0

    put_operation 'Y', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases(-90, 0)
  end

  test 'hover' do
    visit circuit_path
    sleep 1

    y_gate = palette('Y')
    y_gate.hover

    assert_outline(y_gate)
  end

  test 'grab' do
    visit circuit_path
    sleep 1

    y_gate = palette('Y')
    grab y_gate

    assert_no_outline(y_gate)
  end
end
