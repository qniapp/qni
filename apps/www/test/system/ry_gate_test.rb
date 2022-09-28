# frozen_string_literal: true

require 'application_system_test_case'

class RyGateTest < ApplicationSystemTestCase
  test 'the default angle' do
    visit circuit_path

    ry_gate = put_operation('Ry', col: 0, row: 0)

    assert_angle 'π/2', ry_gate
  end

  test 'apply to |0>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    put_operation 'Ry', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 0
  end

  test 'apply to |1>' do
    visit circuit_path
    put_operation '|1>', col: 0, row: 0

    put_operation 'Ry', col: 1, row: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 180, 0
  end

  test 'hover' do
    visit circuit_path
    sleep 1

    ry_gate = palette('Ry')
    ry_gate.hover

    assert_outline(ry_gate)
  end

  test 'grab' do
    visit circuit_path
    sleep 1

    ry_gate = palette('Ry')
    grab ry_gate

    assert_no_outline(ry_gate)
  end
end
