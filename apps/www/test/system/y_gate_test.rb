# frozen_string_literal: true

require 'application_system_test_case'

class YGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  #       ┌───┐
  # |0⟩───│ Y │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation 'Y', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 90
  end

  #       ┌───┐
  # |1⟩───│ Y │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation 'Y', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases(-90, 0)
  end

  test 'hover' do
    y_gate = palette('Y')
    y_gate.hover

    assert_outline(y_gate)
  end

  test 'grab' do
    y_gate = palette('Y')
    grab y_gate

    assert_no_outline(y_gate)
  end
end
