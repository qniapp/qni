# frozen_string_literal: true

require 'application_system_test_case'

class SwapGateTest < ApplicationSystemTestCase
  test 'apply Swap-Swap to |01>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0
    put_operation '|1>', col: 0, row: 1

    put_operation 'Swap', col: 1, row: 0
    put_operation 'Swap', col: 1, row: 1

    assert_qubit_circles 4
    assert_magnitudes 0, 1, 0, 0
    assert_phases 0, 0, 0, 0
  end

  test 'hover' do
    visit circuit_path

    swap_gate = hover_palette_operation('Swap')

    assert_outline(swap_gate)
  end
end
