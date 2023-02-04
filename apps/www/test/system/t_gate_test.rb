# frozen_string_literal: true

require 'application_system_test_case'

class TGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  # ┌───┐
  # │ T │
  # └───┘
  test 'the default state' do
    t_gate = palette('T')

    assert_body_background_color colors_emerald(500), t_gate
    assert_icon_color colors_white, t_gate
    assert_no_outline t_gate
  end

  # ╔═══╗
  # ║ T ║
  # ╚═══╝
  test 'hover' do
    t_gate = palette('T')

    hover t_gate

    assert_body_background_color colors_emerald(500), t_gate
    assert_icon_color colors_white, t_gate
    assert_outline t_gate
  end

  # ┏━━━┓
  # ┃ T ┃
  # ┗━━━┛
  test 'grab' do
    t_gate = palette('T')

    grab t_gate

    assert_body_background_color colors_purple(500), t_gate
    assert_icon_color colors_white, t_gate
    assert_no_outline t_gate
  end

  #       ┌───┐
  # |0⟩───│ T │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation 'T', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #       ┏━━━┓
  # |0⟩───┃ T ┃───
  #       ┗━━━┛
  test 'preview T|0>' do
    put_operation '|0>', step: 0, bit: 0

    hover_operation 'T', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #       ┌───┐
  # |1⟩───│ T │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation 'T', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 45
  end

  #       ┏━━━┓
  # |1⟩───┃ T ┃───
  #       ┗━━━┛
  test 'preview T|1>' do
    put_operation '|1>', step: 0, bit: 0

    hover_operation 'T', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 45
  end
end
