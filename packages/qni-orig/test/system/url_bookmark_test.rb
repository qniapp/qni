require 'application_system_test_case'

class UrlBookmarkTest < ApplicationSystemTestCase
  setup do
    visit new_circuit_path(json: '{"cols":[[1]]}')
  end

  test 'bookmark a single H gate circuit' do
    palette('h-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["H"]]}', decoded_current_path
  end

  test 'bookmark a single X gate circuit' do
    palette('x-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["X"]]}', decoded_current_path
  end

  test 'bookmark a single Y gate circuit' do
    palette('y-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["Y"]]}', decoded_current_path
  end

  test 'bookmark a single Z gate circuit' do
    palette('z-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["Z"]]}', decoded_current_path
  end

  test 'bookmark a single phase shift gate circuit' do
    palette('phase-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["P"]]}', decoded_current_path
  end

  test 'bookmark a single √X gate circuit' do
    palette('rnot-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["X^½"]]}', decoded_current_path
  end

  test 'bookmark a single Rx gate circuit' do
    palette('rx-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["Rx"]]}', decoded_current_path
  end

  test 'bookmark a single Ry gate circuit' do
    palette('ry-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["Ry"]]}', decoded_current_path
  end

  test 'bookmark a single Rz gate circuit' do
    palette('rz-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["Rz"]]}', decoded_current_path
  end

  test 'bookmark a single control gate circuit' do
    palette('control-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["•"]]}', decoded_current_path
  end

  test 'bookmark a single swap gate circuit' do
    palette('swap-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["Swap"]]}', decoded_current_path
  end

  test 'bookmark a single Bloch display circuit' do
    palette('bloch-display').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["Bloch"]]}', decoded_current_path
  end

  test 'bookmark a single |0> gate circuit' do
    palette('write-gate[data-value="0"]').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["|0>"]]}', decoded_current_path
  end

  test 'bookmark a single |1> gate circuit' do
    palette('write-gate[data-value="1"]').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["|1>"]]}', decoded_current_path
  end

  test 'bookmark a single measurement gate circuit' do
    palette('measurement-gate').drag_to(first('circuit-dropzone'), html5: false)

    assert_equal '/new/{"cols":[["Measure"]]}', decoded_current_path
  end
end
