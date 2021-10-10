require 'application_system_test_case'

class UrlBookmarkTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
  end

  test 'bookmark a single H gate circuit' do
    put_operation 'H', col: 0, row: 0

    assert_equal '/{"cols":[["H"]]}', decoded_current_path
  end

  test 'bookmark a single X gate circuit' do
    put_operation 'X', col: 0, row: 0

    assert_equal '/{"cols":[["X"]]}', decoded_current_path
  end

  test 'bookmark a single Y gate circuit' do
    put_operation 'Y', col: 0, row: 0

    assert_equal '/{"cols":[["Y"]]}', decoded_current_path
  end

  test 'bookmark a single Z gate circuit' do
    put_operation 'Z', col: 0, row: 0

    assert_equal '/{"cols":[["Z"]]}', decoded_current_path
  end

  test 'bookmark a single phase shift gate circuit' do
    put_operation 'Phase', col: 0, row: 0

    assert_equal '/{"cols":[["P(π_2)"]]}', decoded_current_path
  end

  test 'bookmark a single √X gate circuit' do
    put_operation '√X', col: 0, row: 0

    assert_equal '/{"cols":[["X^½"]]}', decoded_current_path
  end

  test 'bookmark a single Rx gate circuit' do
    put_operation 'Rx', col: 0, row: 0

    assert_equal '/{"cols":[["Rx(π_2)"]]}', decoded_current_path
  end

  test 'bookmark a single Ry gate circuit' do
    put_operation 'Ry', col: 0, row: 0

    assert_equal '/{"cols":[["Ry(π_2)"]]}', decoded_current_path
  end

  test 'bookmark a single Rz gate circuit' do
    put_operation 'Rz', col: 0, row: 0

    assert_equal '/{"cols":[["Rz(π_2)"]]}', decoded_current_path
  end

  test 'bookmark a single control gate circuit' do
    put_operation 'Control', col: 0, row: 0

    assert_equal '/{"cols":[["•"]]}', decoded_current_path
  end

  test 'bookmark a single swap gate circuit' do
    put_operation 'Swap', col: 0, row: 0

    assert_equal '/{"cols":[["Swap"]]}', decoded_current_path
  end

  test 'bookmark a single Bloch display circuit' do
    put_operation 'Bloch', col: 0, row: 0

    assert_equal '/{"cols":[["Bloch"]]}', decoded_current_path
  end

  test 'bookmark a single |0> gate circuit' do
    put_operation '|0>', col: 0, row: 0

    assert_equal '/{"cols":[["|0>"]]}', decoded_current_path
  end

  test 'bookmark a single |1> gate circuit' do
    put_operation '|1>', col: 0, row: 0

    assert_equal '/{"cols":[["|1>"]]}', decoded_current_path
  end

  test 'bookmark a single measurement gate circuit' do
    put_operation 'Measure', col: 0, row: 0

    assert_equal '/{"cols":[["Measure"]]}', decoded_current_path
  end
end
