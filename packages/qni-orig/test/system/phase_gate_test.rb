require 'application_system_test_case'

class PhaseGateTest < ApplicationSystemTestCase
  test 'the default angle' do
    visit new_circuit_path

    drag_and_drop palette('phase-gate'), to: dropzone(0, 0)

    assert_phi 'π/2', quantum_circuit('phase-gate')
  end
end
