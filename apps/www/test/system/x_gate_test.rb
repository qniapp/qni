# frozen_string_literal: true

require 'application_system_test_case'

class XGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  # ┌───┐
  # │ X │
  # └───┘
  test 'default state' do
    x_gate = palette('X')

    assert_body_background_color colors_emerald(500), x_gate
    assert_icon_color colors_white, x_gate
    assert_no_outline x_gate
  end

  # ╔═══╗
  # ║ X ║
  # ╚═══╝
  test 'hover' do
    x_gate = palette('X')

    hover x_gate

    assert_body_background_color colors_emerald(500), x_gate
    assert_icon_color colors_white, x_gate
    assert_outline x_gate
  end

  # ┏━━━┓
  # ┃ X ┃
  # ┗━━━┛
  test 'grab' do
    x_gate = palette('X')

    grab x_gate

    assert_body_background_color colors_purple(500), x_gate
    assert_icon_color colors_white, x_gate
    assert_no_outline x_gate
  end

  #       ┌───┐
  # |0⟩───│ X │───
  #       └───┘
  test 'apply to |0⟩' do
    put_operation '|0⟩', step: 0, bit: 0

    put_operation 'X', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 0
  end

  #       ┏━━━┓
  # |0⟩───┃ X ┃───
  #       ┗━━━┛
  test 'preview X|0⟩' do
    put_operation '|0⟩', step: 0, bit: 0

    hover_operation 'X', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 0
  end

  #       ┌───┐
  # |1⟩───│ X │───
  #       └───┘
  test 'apply to |1⟩' do
    put_operation '|1⟩', step: 0, bit: 0

    put_operation 'X', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #       ┏━━━┓
  # |1⟩───┃ X ┃───
  #       ┗━━━┛
  test 'preview X|1⟩' do
    put_operation '|1⟩', step: 0, bit: 0

    hover_operation 'X', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end
end
