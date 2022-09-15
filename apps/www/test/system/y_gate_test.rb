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

    y_gate = hover_palette_operation('Y')

    assert_outline(y_gate)
  end
end
