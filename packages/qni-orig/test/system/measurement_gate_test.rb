require 'application_system_test_case'

class MeasurementGateTest < ApplicationSystemTestCase
  test 'measurement gate on palette does not display its value' do
    visit new_circuit_path

    assert_no_value palette('Measure')
  end

  test 'measurement gate hovering on dropzone displays its value' do
    visit new_circuit_path

    measurement_gate = hover_operation('Measure', col: 0, row: 0)

    assert_value '0', measurement_gate
  end

  test 'measurement gate on circuit displays its value' do
    visit new_circuit_path

    measurement_gate = put_operation('Measure', col: 0, row: 0)

    assert_value '0', measurement_gate
  end

  test 'measurement gate does not display its value when unsnapped' do
    visit new_circuit_path(json: '{"cols":[["Measure"]]}')

    measurement_gate = quantum_circuit('measurement-gate')
    drag_and_hover measurement_gate, over: find('body')

    assert_no_value measurement_gate
  end

  test 'input and output wire state changes' do
    visit new_circuit_path
    put_operation '|0>', col: 0, row: 0

    put_operation 'Measure', col: 1, row: 0

    assert_input_wire_quantum dropzone(1, 0)
    assert_output_wire_classical dropzone(1, 0)
  end

  test 'preview the change in input and output wire states' do
    visit new_circuit_path
    put_operation '|0>', col: 0, row: 0

    hover_operation 'Measure', col: 1, row: 0

    assert_input_wire_quantum dropzone(1, 0)
    assert_output_wire_classical dropzone(1, 0)
  end

  test '|0> is measured to be 0' do
    visit new_circuit_path
    put_operation '|0>', col: 0, row: 0

    measurement_gate = put_operation('Measure', col: 1, row: 0)

    assert_value '0', measurement_gate
  end

  test '|1> is measured to be 1' do
    visit new_circuit_path
    put_operation '|1>', col: 0, row: 0

    measurement_gate = put_operation('Measure', col: 1, row: 0)

    assert_value '1', measurement_gate
  end
end
