require 'application_system_test_case'

class MeasurementGateTest < ApplicationSystemTestCase
  test 'measurement gate on palette does not display its value' do
    visit new_circuit_path

    assert_no_value palette('measurement-gate')
  end

  test 'measurement gate hovering on dropzone displays its value' do
    visit new_circuit_path

    drag_and_hover palette('measurement-gate'), over: dropzone(0, 0)

    assert_value '0', quantum_circuit('measurement-gate')
  end

  test 'measurement gate on circuit displays its value' do
    visit new_circuit_path

    drag_and_drop palette('measurement-gate'), to: dropzone(0, 0)

    assert_value '0', quantum_circuit('measurement-gate')
  end

  test 'measurement gate does not display its value when unsnapped' do
    visit new_circuit_path(json: '{"cols":[["Measure"]]}')

    measurement_gate = quantum_circuit('measurement-gate')
    drag_and_hover measurement_gate, over: find('body')

    assert_no_value measurement_gate
  end

  test 'input and output wire state changes' do
    visit new_circuit_path(json: '{"cols":[["|0>"]]}')

    dropzone = dropzone(1, 0)
    drag_and_drop palette('measurement-gate'), to: dropzone

    assert_input_wire_quantum dropzone
    assert_output_wire_classical dropzone
  end

  test 'preview the change in input and output wire states' do
    visit new_circuit_path(json: '{"cols":[["|0>"]]}')

    dropzone = dropzone(1, 0)
    drag_and_hover palette('measurement-gate'), over: dropzone

    assert_input_wire_quantum dropzone
    assert_output_wire_classical dropzone
  end

  test '|0> is measured to be 0' do
    visit new_circuit_path(json: '{"cols":[["|0>"]]}')

    drag_and_drop palette('measurement-gate'), to: dropzone(1, 0)

    assert_value '0', quantum_circuit('measurement-gate')
  end

  test '|1> is measured to be 1' do
    visit new_circuit_path(json: '{"cols":[["|1>"]]}')

    drag_and_drop palette('measurement-gate'), to: dropzone(1, 0)

    assert_value '1', quantum_circuit('measurement-gate')
  end
end
