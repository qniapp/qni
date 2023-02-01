# frozen_string_literal: true

require 'application_system_test_case'

class MeasurementGateTest < ApplicationSystemTestCase
  test 'measurement gate hovering on dropzone displays its value' do
    visit circuit_path

    sleep 1

    measurement_gate = hover_circuit_operation('Measure', col: 0, row: 0)

    assert_value '0', measurement_gate
  end

  test 'measurement gate on circuit displays its value' do
    visit circuit_path

    sleep 1

    measurement_gate = put_operation('Measure', col: 0, row: 0)

    assert_value '0', measurement_gate
  end

  test 'input and output wire state changes' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    put_operation 'Measure', col: 1, row: 0

    assert_input_wire_quantum dropzone(1, 0)
    assert_output_wire_classical dropzone(1, 0)
  end

  test 'preview the change in input and output wire states' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    hover_circuit_operation 'Measure', col: 1, row: 0

    assert_input_wire_quantum dropzone(1, 0)
    assert_output_wire_classical dropzone(1, 0)
  end

  test '|0> is measured to be 0' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0

    measurement_gate = put_operation('Measure', col: 1, row: 0)

    assert_value '0', measurement_gate
  end

  test '|1> is measured to be 1' do
    visit circuit_path
    put_operation '|1>', col: 0, row: 0

    measurement_gate = put_operation('Measure', col: 1, row: 0)

    assert_value '1', measurement_gate
  end

  test 'hover' do
    visit circuit_path
    sleep 1

    measurement_gate = palette('Measure')
    measurement_gate.hover

    assert_outline(measurement_gate)
  end

  test 'grab' do
    visit circuit_path
    sleep 1

    measurement_gate = palette('Measure')
    grab measurement_gate

    assert_no_outline(measurement_gate)
  end
end
