# frozen_string_literal: true

require 'application_system_test_case'

class TrashOperationTest < ApplicationSystemTestCase
  test 'drag and drop an operation on the palette to discard it' do
    visit circuit_path

    drag_and_drop palette('H'), to: find('body')

    within('#palette') do
      assert_selector 'h-gate'
    end
    within('quantum-circuit') do
      assert_no_selector 'h-gate'
    end
  end

  test 'drag and drop an operation on the circuit to discard it' do
    visit circuit_path(json: '{"cols":["H"]}')

    drag_and_drop quantum_circuit('h-gate'), to: find('#palette')

    within('quantum-circuit') do
      assert_no_selector 'h-gate'
    end
  end
end
