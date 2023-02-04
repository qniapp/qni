# frozen_string_literal: true

require 'application_system_test_case'

class ZGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  # ┌───┐
  # │ Z │
  # └───┘
  test 'the default state' do
    z_gate = palette('Z')

    assert_body_background_color colors_emerald(500), z_gate
    assert_icon_color colors_white, z_gate
    assert_no_outline z_gate
  end

  # ╔═══╗
  # ║ Z ║
  # ╚═══╝
  test 'hover' do
    z_gate = palette('Z')

    hover z_gate

    assert_body_background_color colors_emerald(500), z_gate
    assert_icon_color colors_white, z_gate
    assert_outline z_gate
  end

  # ┏━━━┓
  # ┃ Z ┃
  # ┗━━━┛
  test 'grab' do
    z_gate = palette('Z')

    grab z_gate

    assert_body_background_color colors_purple(500), z_gate
    assert_icon_color colors_white, z_gate
    assert_no_outline z_gate
  end

  #       ┌───┐
  # |0⟩───│ Z │───
  #       └───┘
  test 'apply to |0⟩' do
    put_operation '|0⟩', step: 0, bit: 0

    put_operation 'Z', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #       ┏━━━┓
  # |0⟩───┃ Z ┃───
  #       ┗━━━┛
  test 'preview Z|0⟩' do
    put_operation '|0⟩', step: 0, bit: 0

    hover_operation 'Z', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #       ┌───┐
  # |1⟩───│ Z │───
  #       └───┘
  test 'apply to |1⟩' do
    put_operation '|1⟩', step: 0, bit: 0

    put_operation 'Z', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 180
  end

  #       ┏━━━┓
  # |1⟩───┃ Z ┃───
  #       ┗━━━┛
  test 'preview Z|1⟩' do
    put_operation '|1⟩', step: 0, bit: 0

    hover_operation 'Z', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 180
  end
end
