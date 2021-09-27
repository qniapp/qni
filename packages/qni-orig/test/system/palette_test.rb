require 'application_system_test_case'

class PaletteTest < ApplicationSystemTestCase
  test 'drag and drop an operation from the palette' do
    visit new_circuit_path

    drag_and_drop palette('h-gate'), to: dropzone(0, 0)

    within('quantum-circuit') do
      assert_selector 'h-gate'
    end
  end
end
