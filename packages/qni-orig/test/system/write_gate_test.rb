# frozen_string_literal: true

require 'application_system_test_case'

class WriteGateTest < ApplicationSystemTestCase
  test 'set a qubit state to |1>' do
    visit circuit_path
    put_operation '|0>', col: 0, row: 0
    put_operation 'H', col: 1, row: 0

    put_operation '|1>', col: 2, row: 1

    assert_magnitudes 0, 0, Math.sqrt(1.0 / 2), Math.sqrt(1.0 / 2)
    assert_phases 0, 0, 0, 0
  end

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
