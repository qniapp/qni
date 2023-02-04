# frozen_string_literal: true

require 'application_system_test_case'

class YGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  # ┌───┐
  # │ Y │
  # └───┘
  test 'default state' do
    y_gate = palette('Y')

    assert_body_background_color colors_emerald(500), y_gate
    assert_icon_color colors_white, y_gate
    assert_no_outline y_gate
  end

  # ╔═══╗
  # ║ Y ║
  # ╚═══╝
  test 'hover' do
    y_gate = palette('Y')

    hover y_gate

    assert_body_background_color colors_emerald(500), y_gate
    assert_icon_color colors_white, y_gate
    assert_outline y_gate
  end

  # ┏━━━┓
  # ┃ Y ┃
  # ┗━━━┛
  test 'grab' do
    y_gate = palette('Y')

    grab y_gate

    assert_body_background_color colors_purple(500), y_gate
    assert_icon_color colors_white, y_gate
    assert_no_outline y_gate
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

  #       ┏━━━┓
  # |0⟩───┃ Y ┃───
  #       ┗━━━┛
  test 'preview Y|0⟩' do
    put_operation '|0⟩', step: 0, bit: 0

    hover_operation 'Y', step: 1, bit: 0

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

  #       ┏━━━┓
  # |1⟩───┃ Y ┃───
  #       ┗━━━┛
  test 'preview Y|1>' do
    put_operation '|1>', step: 0, bit: 0

    hover_operation 'Y', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases(-90, 0)
  end
end
