# frozen_string_literal: true

require 'application_system_test_case'

class ZGateTest < ApplicationSystemTestCase
  test 'apply to |0>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    put_operation 'Z', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  test 'apply to |1>' do
    visit circuit_path
    put_operation '|1>', col: 0, row: 0

    put_operation 'Z', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 180
  end

  test 'hover' do
    visit circuit_path
    sleep 1

    z_gate = palette('Z')
    z_gate.hover

    assert_outline(z_gate)
  end
end
