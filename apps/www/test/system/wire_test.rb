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

    page.driver.browser.action
        .move_to(palette('H').native, 0, 0)
        .click_and_hold
        .perform

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
