require 'application_system_test_case'

class HGateTest < ApplicationSystemTestCase
  test 'apply to |0>' do
    visit new_circuit_path
    put_operation '|0>', col: 0, row: 0

    put_operation 'H', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 0
  end

  test 'apply to |1>' do
    visit new_circuit_path
    put_operation '|1>', col: 0, row: 0

    put_operation 'H', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 180
  end
end
