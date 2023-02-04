# frozen_string_literal: true

require 'application_system_test_case'

class PhaseGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  test 'the default angle' do
    phase_gate = put_operation('Phase', step: 0, bit: 0)

    assert_angle 'π/2', phase_gate
  end

  # ┌───┐
  # │ P │
  # └───┘
  test 'default state' do
    phase_gate = palette('Phase')

    assert_body_background_color colors_emerald(500), phase_gate
    assert_icon_color colors_white, phase_gate
    assert_no_outline phase_gate
  end

  # ╔═══╗
  # ║ P ║
  # ╚═══╝
  test 'hover' do
    phase_gate = palette('Phase')

    hover phase_gate

    assert_body_background_color colors_emerald(500), phase_gate
    assert_icon_color colors_white, phase_gate
    assert_outline phase_gate
  end

  # ┏━━━┓
  # ┃ P ┃
  # ┗━━━┛
  test 'grab' do
    phase_gate = palette('Phase')

    grab phase_gate

    assert_body_background_color colors_purple(500), phase_gate
    assert_icon_color colors_white, phase_gate
    assert_no_outline phase_gate
  end

  #        π/2
  #       ┌───┐
  # |0⟩───│ P │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation 'Phase', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #        π/2
  #       ┏━━━┓
  # |0⟩───┃ P ┃───
  #       ┗━━━┛
  test 'preview P|0>' do
    put_operation '|0>', step: 0, bit: 0

    hover_operation 'Phase', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #        π/2
  #       ┌───┐
  # |1⟩───│ P │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation 'Phase', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 90
  end

  #        π/2
  #       ┏━━━┓
  # |1⟩───┃ P ┃───
  #       ┗━━━┛
  test 'preview P|1>' do
    put_operation '|1>', step: 0, bit: 0

    hover_operation 'Phase', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 90
  end
end
