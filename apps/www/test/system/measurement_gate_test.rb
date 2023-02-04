# frozen_string_literal: true

require 'application_system_test_case'

class MeasurementGateTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  # ┌───┐
  # │ M │
  # └───┘
  test 'default state' do
    measurement_gate = palette('Measure')

    assert_body_background_color colors_transparent, measurement_gate
    assert_icon_color colors_purple(500), measurement_gate
    assert_no_outline measurement_gate
  end

  # ╔═══╗
  # ║ M ║
  # ╚═══╝
  test 'hover' do
    measurement_gate = palette('Measure')

    hover measurement_gate

    assert_body_background_color colors_transparent, measurement_gate
    assert_icon_color colors_purple(500), measurement_gate
    assert_outline measurement_gate
  end

  # ┏━━━┓
  # ┃ M ┃
  # ┗━━━┛
  test 'grab' do
    measurement_gate = palette('Measure')

    grab measurement_gate

    assert_body_background_color colors_purple(500), measurement_gate
    assert_icon_color colors_purple(400), measurement_gate
    assert_no_outline measurement_gate
  end

  #  ┌───┐
  # -│ 0 │=
  #  └───┘
  test 'measurement gate on circuit displays its value' do
    measurement_gate = put_operation('Measure', col: 0, row: 0)

    assert_value '0', measurement_gate
  end

  #  ┏━━━┓
  # -┃ 0 ┃=
  #  ┗━━━┛
  test 'measurement gate hovering on dropzone displays its value' do
    measurement_gate = hover_operation('Measure', col: 0, row: 0)

    assert_value '0', measurement_gate
  end

  #       ┌───┐
  # |0⟩---│ 0 │===
  #       └───┘
  test '|0⟩ is measured to be 0' do
    put_operation '|0⟩', col: 0, row: 0

    measurement_gate = put_operation('Measure', col: 1, row: 0)

    assert_value '0', measurement_gate
  end

  #       ┌───┐
  # |1⟩---│ 1 │===
  #       └───┘
  test '|1⟩ is measured to be 1' do
    put_operation '|1⟩', col: 0, row: 0

    measurement_gate = put_operation('Measure', col: 1, row: 0)

    assert_value '1', measurement_gate
  end

  #       ┌───┐
  # |0⟩---│ M │===
  #       └───┘
  test 'input and output wire state changes' do
    put_operation '|0⟩', col: 0, row: 0

    put_operation 'Measure', col: 1, row: 0

    assert_input_wire_quantum col: 1, row: 0
    assert_output_wire_classical col: 1, row: 0
  end

  #       ┏━━━┓   
  # |0⟩───┃ M ┃===
  #       ┗━━━┛   
  test 'preview the change in input and output wire states' do
    put_operation '|0⟩', col: 0, row: 0

    hover_operation 'Measure', col: 1, row: 0

    assert_input_wire_quantum col: 1, row: 0
    assert_output_wire_classical col: 1, row: 0
  end
end
