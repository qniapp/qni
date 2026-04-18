# frozen_string_literal: true

require 'application_system_test_case'

class CircuitPageTest < ApplicationSystemTestCase
  test 'renders a shared circuit page in test environment' do
    visit circuit_path(json: '{"cols":["H"]}')

    assert_selector 'quantum-circuit'
    assert_selector 'quantum-circuit h-gate'
  end
end
