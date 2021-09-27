require 'application_system_test_case'

class WriteGateTest < ApplicationSystemTestCase
  test 'input and output wire states change' do
    visit new_circuit_path

    dropzone = dropzone(0, 0)
    drag_and_drop palette('write-gate'), to: dropzone

    assert_input_wire_classical dropzone
    assert_output_wire_quantum dropzone
  end

  test 'preview the change in input and output wire states' do
    visit new_circuit_path

    dropzone = dropzone(0, 0)
    drag_and_hover palette('write-gate'), over: dropzone

    assert_input_wire_classical dropzone
    assert_output_wire_quantum dropzone
  end
end
