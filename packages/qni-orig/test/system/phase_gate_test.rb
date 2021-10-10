require 'application_system_test_case'

class PhaseGateTest < ApplicationSystemTestCase
  test 'the default angle' do
    visit circuit_path

    phase_gate = put_operation('Phase', col: 0, row: 0)

    assert_phi 'π/2', phase_gate
  end

  test 'apply to |0>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    put_operation 'Phase', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  test 'apply to |1>' do
    visit circuit_path
    put_operation '|1>', col: 0, row: 0

    put_operation 'Phase', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 90
  end
end
