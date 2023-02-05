# frozen_string_literal: true

require 'application_system_test_case'

class RzGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  test 'the default angle' do
    rz_gate = put_operation('Rz', step: 0, bit: 0)

    assert_angle 'π/2', rz_gate
  end

  # ┌───┐
  # │ Rz│
  # └───┘
  test 'the default state' do
    rz_gate = palette('Rz')

    assert_body_background_color colors_emerald(500), rz_gate
    assert_icon_color colors_white, rz_gate
    assert_no_outline rz_gate
  end

  # ╔═══╗
  # ║ Rz║
  # ╚═══╝
  test 'hover' do
    rz_gate = palette('Rz')

    hover rz_gate

    assert_body_background_color colors_emerald(500), rz_gate
    assert_icon_color colors_white, rz_gate
    assert_outline rz_gate
  end

  # ┏━━━┓
  # ┃ Rz┃
  # ┗━━━┛
  test 'grab' do
    rz_gate = palette('Rz')

    grab rz_gate

    assert_body_background_color colors_purple(500), rz_gate
    assert_icon_color colors_white, rz_gate
    assert_no_outline rz_gate
  end

  #        π/2
  #       ┌───┐
  # |0⟩───│ Rz│───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation 'Rz', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases(-45, 0)
  end

  #        π/2
  #       ┏━━━┓
  # |0⟩───┃ Rz┃───
  #       ┗━━━┛
  test 'preview Rz|0>' do
    put_operation '|0>', step: 0, bit: 0

    hover_operation 'Rz', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases(-45, 0)
  end

  #        π/2
  #       ┌───┐
  # |1⟩───│ Rz│───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation 'Rz', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 45
  end

  #        π/2
  #       ┏━━━┓
  # |1⟩───┃ Rz┃───
  #       ┗━━━┛
  test 'preview Rz|1>' do
    put_operation '|1>', step: 0, bit: 0

    hover_operation 'Rz', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 45
  end
end
