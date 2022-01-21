# frozen_string_literal: true

require 'application_system_test_case'

class RxGateTest < ApplicationSystemTestCase
  test 'the default angle' do
    visit circuit_path

    rx_gate = put_operation('Rx', col: 0, row: 0)

    assert_angle 'π/2', rx_gate
  end

  test 'apply to |0>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    put_operation 'Rx', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, -90
  end

  test 'apply to |1>' do
    visit circuit_path
    put_operation '|1>', col: 0, row: 0

    put_operation 'Rx', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases(-90, 0)
  end
end
