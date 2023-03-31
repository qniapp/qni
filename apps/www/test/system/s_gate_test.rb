# frozen_string_literal: true

require 'application_system_test_case'

class SGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  # ┌───┐
  # │ S │
  # └───┘
  test 'the default state' do
    s_gate = palette('S')

    assert_body_background_color colors_emerald(500), s_gate
    assert_icon_color colors_white, s_gate
    assert_no_outline s_gate
  end

  # ╔═══╗
  # ║ S ║
  # ╚═══╝
  test 'hover' do
    s_gate = palette('S')

    hover s_gate

    assert_body_background_color colors_emerald(500), s_gate
    assert_icon_color colors_white, s_gate
    assert_outline s_gate
  end

  # ┏━━━┓
  # ┃ S ┃
  # ┗━━━┛
  test 'grab' do
    s_gate = palette('S')

    grab s_gate

    assert_body_background_color colors_purple(500), s_gate
    assert_icon_color colors_white, s_gate
    assert_no_outline s_gate
  end

  #       ┌───┐
  # |0⟩───│ S │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation 'S', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #       ┏━━━┓
  # |0⟩───┃ S ┃───
  #       ┗━━━┛
  test 'preview S|0>' do
    put_operation '|0>', step: 0, bit: 0

    hover_operation 'S', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #       ┌───┐
  # |1⟩───│ S │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation 'S', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 90
  end

  #       ┏━━━┓
  # |1⟩───┃ S ┃───
  #       ┗━━━┛
  test 'preview S|1>' do
    put_operation '|1>', step: 0, bit: 0

    hover_operation 'S', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 90
  end
end
