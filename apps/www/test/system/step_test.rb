# frozen_string_literal: true

require 'application_system_test_case'

class WireTest < ApplicationSystemTestCase
  test 'the default data-min-step-count = 5' do
    visit circuit_path

    within('quantum-circuit') do
      assert_steps 5
    end
  end

  test 'remove last empty steps on mouseup' do
    visit circuit_path(json: '{"cols":[["H"],["H"],["H"],["H"],["H"],["H"],["H"]]}')

    7.times do
      drag_and_drop quantum_circuit('h-gate'), to: find('body')
    end

    within('quantum-circuit') do
      assert_steps 5
    end
  end
end
