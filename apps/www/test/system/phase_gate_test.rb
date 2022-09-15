# frozen_string_literal: true

require 'application_system_test_case'

class PhaseGateTest < ApplicationSystemTestCase
  test 'the default angle' do
    visit circuit_path

    phase_gate = put_operation('Phase', col: 0, row: 0)

    assert_angle 'π/2', phase_gate
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

  test 'hover' do
    visit circuit_path
    sleep 1

    phase_gate = palette('Phase')
    phase_gate.hover

    assert_outline(phase_gate)
  end

  test 'grab' do
    visit circuit_path
    sleep 1

    phase_gate = palette('Phase')
    grab phase_gate

    assert_no_outline(phase_gate)
  end
end
