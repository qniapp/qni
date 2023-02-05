# frozen_string_literal: true

require 'application_system_test_case'

class RnotGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  # ┌───┐
  # │√X │
  # └───┘
  test 'the default state' do
    rnot_gate = palette('√X')

    assert_body_background_color colors_emerald(500), rnot_gate
    assert_icon_color colors_white, rnot_gate
    assert_no_outline rnot_gate
  end

  # ╔═══╗
  # ║√X ║
  # ╚═══╝
  test 'hover' do
    rnot_gate = palette('√X')

    hover rnot_gate

    assert_body_background_color colors_emerald(500), rnot_gate
    assert_icon_color colors_white, rnot_gate
    assert_outline rnot_gate
  end

  # ┏━━━┓
  # ┃√X ┃
  # ┗━━━┛
  test 'grab' do
    rnot_gate = palette('√X')

    grab rnot_gate

    assert_body_background_color colors_purple(500), rnot_gate
    assert_icon_color colors_white, rnot_gate
    assert_no_outline rnot_gate
  end

  #       ┌───┐
  # |0⟩───│√X │───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation '√X', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 45, -45
  end

  #       ┏━━━┓
  # |0⟩───┃√X ┃───
  #       ┗━━━┛
  test 'preview √X|0>' do
    put_operation '|0>', step: 0, bit: 0

    hover_operation '√X', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 45, -45
  end

  #       ┌───┐
  # |1⟩───│√X │───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation '√X', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases(-45, 45)
  end

  #       ┏━━━┓
  # |1⟩───┃√X ┃───
  #       ┗━━━┛
  test 'preview √X|1>' do
    put_operation '|1>', step: 0, bit: 0

    hover_operation '√X', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases(-45, 45)
  end
end
