# frozen_string_literal: true

require 'application_system_test_case'

class SpacerGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  #
  #   …
  #
  test 'the default state' do
    spacer_gate = palette('…')

    assert_body_background_color colors_transparent, spacer_gate
    assert_icon_color colors_neutral(900), spacer_gate
    assert_no_outline spacer_gate
  end

  # ╔═══╗
  # ║ … ║
  # ╚═══╝
  test 'hover' do
    spacer_gate = palette('…')

    hover spacer_gate

    assert_body_background_color colors_transparent, spacer_gate
    assert_icon_color colors_neutral(900), spacer_gate
    assert_outline spacer_gate
  end

  # ┏━━━┓
  # ┃ … ┃
  # ┗━━━┛
  test 'grab' do
    spacer_gate = palette('…')

    grab spacer_gate

    assert_body_background_color colors_purple(500), spacer_gate
    assert_icon_color colors_white, spacer_gate
    assert_no_outline spacer_gate
  end

  #
  # |0⟩──── … ────
  #
  test 'apply to |0⟩' do
    put_operation '|0⟩', step: 0, bit: 0

    put_operation '…', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #       ┏━━━┓
  # |0⟩───┃ … ┃───
  #       ┗━━━┛
  test 'preview …|0⟩' do
    put_operation '|0⟩', step: 0, bit: 0

    hover_operation '…', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end

  #
  # |1⟩──── … ────
  #
  test 'apply to |1⟩' do
    put_operation '|1⟩', step: 0, bit: 0

    put_operation '…', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 0
  end

  #       ┏━━━┓
  # |1⟩───┃ … ┃───
  #       ┗━━━┛
  test 'preview …|1⟩' do
    put_operation '|1⟩', step: 0, bit: 0

    hover_operation '…', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes 0, 1
    assert_phases 0, 0
  end
end
