# frozen_string_literal: true

require 'application_system_test_case'

class RxGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  test 'the default angle' do
    rx_gate = put_operation('Rx', step: 0, bit: 0)

    assert_angle 'π/2', rx_gate
  end

  # ┌───┐
  # │ Rx│
  # └───┘
  test 'the default state' do
    rx_gate = palette('Rx')

    assert_body_background_color colors_emerald(500), rx_gate
    assert_icon_color colors_white, rx_gate
    assert_no_outline rx_gate
  end

  # ╔═══╗
  # ║ Rx║
  # ╚═══╝
  test 'hover' do
    rx_gate = palette('Rx')

    hover rx_gate

    assert_body_background_color colors_emerald(500), rx_gate
    assert_icon_color colors_white, rx_gate
    assert_outline rx_gate
  end

  # ┏━━━┓
  # ┃ Rx┃
  # ┗━━━┛
  test 'grab' do
    rx_gate = palette('Rx')

    grab rx_gate

    assert_body_background_color colors_purple(500), rx_gate
    assert_icon_color colors_white, rx_gate
    assert_no_outline rx_gate
  end

  #        π/2
  #       ┌───┐
  # |0⟩───│ Rx│───
  #       └───┘
  test 'apply to |0>' do
    put_operation '|0>', step: 0, bit: 0

    put_operation 'Rx', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, -90
  end

  #        π/2
  #       ┏━━━┓
  # |0⟩───┃ Rx┃───
  #       ┗━━━┛
  test 'preview Rx|0>' do
    put_operation '|0>', step: 0, bit: 0

    hover_operation 'Rx', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, -90
  end

  #        π/2
  #       ┌───┐
  # |1⟩───│ Rx│───
  #       └───┘
  test 'apply to |1>' do
    put_operation '|1>', step: 0, bit: 0

    put_operation 'Rx', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases(-90, 0)
  end

  #        π/2
  #       ┏━━━┓
  # |1⟩───┃ Rx┃───
  #       ┗━━━┛
  test 'preview Rx|1>' do
    put_operation '|1>', step: 0, bit: 0

    hover_operation 'Rx', step: 1, bit: 0

    assert_qubit_circles 2
    assert_magnitudes Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases(-90, 0)
  end
end
