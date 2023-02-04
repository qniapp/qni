# frozen_string_literal: true

require 'application_system_test_case'

class SwapGateTest < ApplicationSystemTestCase
  test 'apply Swap-Swap to |01>' do
    visit circuit_path
    put_operation '|0>', step: 0, bit: 0
    put_operation '|1>', step: 0, bit: 1

    put_operation 'Swap', step: 1, bit: 0
    put_operation 'Swap', step: 1, bit: 1

    assert_qubit_circles 4
    assert_magnitudes 0, 1, 0, 0
    assert_phases 0, 0, 0, 0
  end

  test 'hover' do
    visit circuit_path
    sleep 1

    swap_gate = palette('Swap')
    swap_gate.hover

    assert_outline swap_gate
  end

  test 'grab' do
    visit circuit_path
    sleep 1

    swap_gate = palette('Swap')
    grab swap_gate

    assert_no_outline swap_gate
  end
end
