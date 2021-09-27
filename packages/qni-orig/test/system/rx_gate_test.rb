require 'application_system_test_case'

class RxGateTest < ApplicationSystemTestCase
  test 'the default angle' do
    visit new_circuit_path

    drag_and_drop palette('rx-gate'), to: dropzone(0, 0)

    assert_theta 'π/2', quantum_circuit('rx-gate')
  end
end
