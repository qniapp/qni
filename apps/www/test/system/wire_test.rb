# frozen_string_literal: true

require 'application_system_test_case'

class WireTest < ApplicationSystemTestCase
  test 'the default data-min-wire-count = 2' do
    visit circuit_path

    within('quantum-circuit') do
      assert_wires 2
    end
  end

  test 'add new wire on mousedown' do
    visit circuit_path

    page.execute_script('document.querySelector("h-gate").dispatchEvent(new Event("mousedown"))')

    within('quantum-circuit') do
      assert_wires 3
    end
  end

  test 'remove last empty wires on mouseup' do
    visit circuit_path(json: '{"cols":[[1,1,1,1,"H"]]}')

    within('quantum-circuit') do
      drag_and_drop quantum_circuit('h-gate'), to: dropzone(0, 0)
    end

    within('quantum-circuit') do
      assert_wires 2
    end
  end
end
