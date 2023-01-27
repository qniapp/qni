# frozen_string_literal: true

require 'application_system_test_case'

class CircleNotationTest < ApplicationSystemTestCase
  test 'initial state' do
    visit circuit_path

    sleep 1

    assert_qubit_circles 2
    assert_magnitudes 1, 0
    assert_phases 0, 0
  end
end
