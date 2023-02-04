# frozen_string_literal: true

require 'application_system_test_case'

class ZGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  #       ┌───┐
  # |0⟩───│ Z │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation 'Z', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #       ┌───┐
  # |1⟩───│ Z │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation 'Z', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 180
  end

  test 'hover' do
    z_gate = palette('Z')
    z_gate.hover

    assert_outline(z_gate)
  end

  test 'grab' do
    z_gate = palette('Z')
    grab z_gate

    assert_no_outline(z_gate)
  end
end
