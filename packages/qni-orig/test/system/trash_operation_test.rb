require 'application_system_test_case'

class TrashOperationTest < ApplicationSystemTestCase
  test 'drag and drop an operation on the palette to discard it' do
    visit new_circuit_path(json: '{"cols":[]}')

    palette('h-gate').drag_to(find('body'), html5: false)

    within('#palette') do
      assert_selector 'h-gate'
    end
    within('quantum-circuit') do
      assert_no_selector 'h-gate'
    end
  end

  test 'drag and drop an operation on the circuit to discard it' do
    visit new_circuit_path(json: '{"cols":["H"]}')

    quantum_circuit('h-gate').drag_to(find('body'), html5: false)

    within('quantum-circuit') do
      assert_no_selector 'h-gate'
    end
  end
end
