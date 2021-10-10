require 'application_system_test_case'

class WriteGateTest < ApplicationSystemTestCase
  test 'input and output wire states change' do
    visit circuit_path

    put_operation '|0>', col: 0, row: 0

    assert_input_wire_classical dropzone(0, 0)
    assert_output_wire_quantum dropzone(0, 0)
  end

  test 'preview the change in input and output wire states' do
    visit circuit_path

    hover_operation '|0>', col: 0, row: 0

    assert_input_wire_classical dropzone(0, 0)
    assert_output_wire_quantum dropzone(0, 0)
  end
end
