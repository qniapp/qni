# frozen_string_literal: true

require 'application_system_test_case'

class SwapGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  test 'the default state' do
    swap_gate = palette('Swap')

    assert_body_background_color colors_transparent, swap_gate
    assert_icon_color colors_emerald(500), swap_gate
    assert_no_outline swap_gate
  end

  test 'hover' do
    swap_gate = palette('Swap')

    hover swap_gate

    assert_body_background_color colors_transparent, swap_gate
    assert_icon_color colors_emerald(500), swap_gate
    assert_outline swap_gate
  end

  test 'grab' do
    swap_gate = palette('Swap')

    grab swap_gate

    assert_body_background_color colors_purple(500), swap_gate
    assert_icon_color colors_white, swap_gate
    assert_no_outline swap_gate
  end

  # |0⟩─────X──────
  #         │
  #         │
  # |0⟩─────X──────
  test 'apply Swap-Swap to |00⟩' do
    put_operation '|0⟩', step: 0, bit: 0
    put_operation '|0⟩', step: 0, bit: 1

    put_operation 'Swap', step: 1, bit: 0
    put_operation 'Swap', step: 1, bit: 1

    assert_qubit_circles 4
    assert_magnitudes 1, 0, 0, 0
    assert_phases 0, 0, 0, 0
  end

  # |1⟩─────X──────
  #         │
  #         │
  # |0⟩─────X──────
  test 'apply Swap-Swap to |01⟩' do
    put_operation '|1⟩', step: 0, bit: 0
    put_operation '|0⟩', step: 0, bit: 1

    put_operation 'Swap', step: 1, bit: 0
    put_operation 'Swap', step: 1, bit: 1

    assert_qubit_circles 4
    assert_magnitudes 0, 0, 1, 0
    assert_phases 0, 0, 0, 0
  end

  # |0⟩─────X──────
  #         │
  #         │
  # |1⟩─────X──────
  test 'apply Swap-Swap to |10⟩' do
    put_operation '|0⟩', step: 0, bit: 0
    put_operation '|1⟩', step: 0, bit: 1

    put_operation 'Swap', step: 1, bit: 0
    put_operation 'Swap', step: 1, bit: 1

    assert_qubit_circles 4
    assert_magnitudes 0, 1, 0, 0
    assert_phases 0, 0, 0, 0
  end

  # |1⟩─────X──────
  #         │
  #         │
  # |1⟩─────X──────
  test 'apply Swap-Swap to |11⟩' do
    put_operation '|1⟩', step: 0, bit: 0
    put_operation '|1⟩', step: 0, bit: 1

    put_operation 'Swap', step: 1, bit: 0
    put_operation 'Swap', step: 1, bit: 1

    assert_qubit_circles 4
    assert_magnitudes 0, 0, 0, 1
    assert_phases 0, 0, 0, 0
  end
end
