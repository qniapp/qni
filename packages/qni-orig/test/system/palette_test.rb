require 'application_system_test_case'

class PaletteTest < ApplicationSystemTestCase
  test 'drag and drop an operation from the palette' do
    visit new_circuit_path(json: '{"cols":[[1]]}')

    palette('h-gate').drag_to(find('circuit-dropzone'), html5: false)

    within('quantum-circuit') do
      assert_selector 'h-gate'
    end
  end
end
