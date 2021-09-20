require 'application_system_test_case'

class WireTest < ApplicationSystemTestCase
  test 'write gate turns its classic wire into a quantum wire' do
    visit new_circuit_path(json: '{"cols":[[1]]}')

    palette('write-gate[data-value="0"]').drag_to(first('circuit-dropzone'), html5: false)

    assert_nil first('circuit-dropzone')['data-input-wire-quantum']
    assert_equal '', first('circuit-dropzone')['data-output-wire-quantum']
  end

  test 'measurement gate turns its quantum wire into a classic wire' do
    visit new_circuit_path(json: '{"cols":[[1],[1]]}')

    palette('write-gate[data-value="0"]').drag_to(first('circuit-dropzone'), html5: false)
    palette('measurement-gate').drag_to(second('circuit-dropzone'), html5: false)

    assert_equal '', second('circuit-dropzone')['data-input-wire-quantum']
    assert_nil second('circuit-dropzone')['data-output-wire-quantum']
  end
end
