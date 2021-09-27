require 'application_system_test_case'

class UrlBookmarkTest < ApplicationSystemTestCase
  setup do
    visit new_circuit_path
  end

  test 'bookmark a single H gate circuit' do
    drag_and_drop palette('h-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["H"]]}', decoded_current_path
  end

  test 'bookmark a single X gate circuit' do
    drag_and_drop palette('x-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["X"]]}', decoded_current_path
  end

  test 'bookmark a single Y gate circuit' do
    drag_and_drop palette('y-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["Y"]]}', decoded_current_path
  end

  test 'bookmark a single Z gate circuit' do
    drag_and_drop palette('z-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["Z"]]}', decoded_current_path
  end

  test 'bookmark a single phase shift gate circuit' do
    drag_and_drop palette('phase-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["P(π_2)"]]}', decoded_current_path
  end

  test 'bookmark a single √X gate circuit' do
    drag_and_drop palette('rnot-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["X^½"]]}', decoded_current_path
  end

  test 'bookmark a single Rx gate circuit' do
    drag_and_drop palette('rx-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["Rx(π_2)"]]}', decoded_current_path
  end

  test 'bookmark a single Ry gate circuit' do
    drag_and_drop palette('ry-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["Ry(π_2)"]]}', decoded_current_path
  end

  test 'bookmark a single Rz gate circuit' do
    drag_and_drop palette('rz-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["Rz(π_2)"]]}', decoded_current_path
  end

  test 'bookmark a single control gate circuit' do
    drag_and_drop palette('control-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["•"]]}', decoded_current_path
  end

  test 'bookmark a single swap gate circuit' do
    drag_and_drop palette('swap-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["Swap"]]}', decoded_current_path
  end

  test 'bookmark a single Bloch display circuit' do
    drag_and_drop palette('bloch-display'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["Bloch"]]}', decoded_current_path
  end

  test 'bookmark a single |0> gate circuit' do
    drag_and_drop palette('write-gate[data-value="0"]'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["|0>"]]}', decoded_current_path
  end

  test 'bookmark a single |1> gate circuit' do
    drag_and_drop palette('write-gate[data-value="1"]'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["|1>"]]}', decoded_current_path
  end

  test 'bookmark a single measurement gate circuit' do
    drag_and_drop palette('measurement-gate'), to: dropzone(0, 0)

    assert_equal '/{"cols":[["Measure"]]}', decoded_current_path
  end
end
