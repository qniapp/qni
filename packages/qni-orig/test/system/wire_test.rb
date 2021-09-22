require 'application_system_test_case'

class WireTest < ApplicationSystemTestCase
  test 'add new wire on mousedown' do
    visit new_circuit_path(json: '{"cols":[[]]}')

    page.execute_script('document.querySelector("h-gate").dispatchEvent(new Event("mousedown"))')

    within('quantum-circuit') do
      assert_selector 'circuit-dropzone', count: 3 * 5 * 2
    end
  end

  test 'remove last empty wire(s) on mouseup' do
    visit new_circuit_path(json: '{"cols":[[1,1,1,"H"]]}')

    quantum_circuit('h-gate').drag_to(second('circuit-dropzone'), html5: false)

    within('quantum-circuit') do
      assert_selector 'circuit-dropzone', count: 2 * 5
    end
  end

  test 'write gate turns its classic wire into a quantum wire' do
    visit new_circuit_path(json: '{"cols":[[]]}')

    palette('write-gate[data-value="0"]').drag_to(first('circuit-dropzone'), html5: false)

    assert_nil first('circuit-dropzone')['data-input-wire-quantum']
    assert_equal '', first('circuit-dropzone')['data-output-wire-quantum']
  end

  test 'measurement gate turns its quantum wire into a classic wire' do
    visit new_circuit_path(json: '{"cols":[["|0>"]]}')

    palette('measurement-gate').drag_to(third('circuit-dropzone'), html5: false)

    assert_equal '', third('circuit-dropzone')['data-input-wire-quantum']
    assert_nil third('circuit-dropzone')['data-output-wire-quantum']
  end
end
