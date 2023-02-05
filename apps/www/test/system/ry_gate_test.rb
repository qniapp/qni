# frozen_string_literal: true

require 'application_system_test_case'

class RyGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  test 'the default angle' do
    ry_gate = put_operation('Ry', step: 0, bit: 0)

    assert_angle 'π/2', ry_gate
  end

  # ┌───┐
  # │ Ry│
  # └───┘
  test 'the default state' do
    ry_gate = palette('Ry')

    assert_body_background_color colors_emerald(500), ry_gate
    assert_icon_color colors_white, ry_gate
    assert_no_outline ry_gate
  end

  # ╔═══╗
  # ║ Ry║
  # ╚═══╝
  test 'hover' do
    ry_gate = palette('Ry')

    hover ry_gate

    assert_body_background_color colors_emerald(500), ry_gate
    assert_icon_color colors_white, ry_gate
    assert_outline ry_gate
  end

  # ┏━━━┓
  # ┃ Ry┃
  # ┗━━━┛
  test 'grab' do
    ry_gate = palette('Ry')

    grab ry_gate

    assert_body_background_color colors_purple(500), ry_gate
    assert_icon_color colors_white, ry_gate
    assert_no_outline ry_gate
  end

  #        π/2
  #       ┌───┐
  # |0⟩───│ Ry│───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation 'Ry', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 0
  end

  #        π/2
  #       ┏━━━┓
  # |0⟩───┃ Ry┃───
  #       ┗━━━┛
  test 'preview Ry|0>' do
    put_operation '|0>', step: 0, bit: 0

    hover_operation 'Ry', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 0
  end

  #        π/2
  #       ┌───┐
  # |1⟩───│ Ry│───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation 'Ry', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 180, 0
  end

  #        π/2
  #       ┏━━━┓
  # |1⟩───┃ Ry┃───
  #       ┗━━━┛
  test 'preview Ry|1>' do
    put_operation '|1>', step: 0, bit: 0

    hover_operation 'Ry', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 180, 0
  end
end
