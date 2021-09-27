require 'application_system_test_case'

class RyGateTest < ApplicationSystemTestCase
  test 'the default angle' do
    visit new_circuit_path

    drag_and_drop palette('ry-gate'), to: dropzone(0, 0)

    assert_theta 'π/2', quantum_circuit('ry-gate')
  end
end
