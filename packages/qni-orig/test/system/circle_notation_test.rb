require 'application_system_test_case'

class CircleNotationTest < ApplicationSystemTestCase
  test 'initial state' do
    visit new_circuit_path

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end
end
