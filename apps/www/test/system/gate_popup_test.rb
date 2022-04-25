# frozen_string_literal: true

require 'application_system_test_case'

# rubocop:disable Metrics/ClassLength
class GatePopupTest < ApplicationSystemTestCase
  test 'H gate popup' do
    visit circuit_path

    operation = palette('H')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Hadamard Gate
      Creates simple superpositions.
    TEXT
  end

  test 'X gate popup' do
    visit circuit_path

    operation = palette('X')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      NOT Gate (Pauli X Gate)
      Swaps the qubit pair of |0⟩ and |1⟩.
    TEXT
  end

  test 'Y gate popup' do
    visit circuit_path

    operation = palette('Y')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Pauli Y Gate
      The combination of the X and Z gates.
    TEXT
  end

  test 'Z gate popup' do
    visit circuit_path

    operation = palette('Z')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Pauli Z Gate
      Negate phases when the qubit is ON.
    TEXT
  end

  test 'Phase gate popup' do
    visit circuit_path

    operation = palette('Phase')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Phase Gate
      Applies a phase of eiφ to the |1⟩ state.
      The default φ = π/2.
    TEXT
  end

  test '√X gate popup' do
    visit circuit_path

    operation = palette('√X')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Square Root of NOT Gate
      Rotates around the X-axis by π/2.
    TEXT
  end

  test 'Rx gate popup' do
    visit circuit_path

    operation = palette('Rx')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Rx Gate
      Rotates around the X-axis by the angle θ.
      The default θ = π/2.
    TEXT
  end

  test 'Ry gate popup' do
    visit circuit_path

    operation = palette('Ry')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Ry Gate
      Rotates around the Y-axis by the angle θ.
      The default θ = π/2.
    TEXT
  end

  test 'Rz gate popup' do
    visit circuit_path

    operation = palette('Rz')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Rz Gate
      Rotates around the Z-axis by the angle θ.
      The default θ = π/2.
    TEXT
  end

  test 'Swap gate popup' do
    visit circuit_path

    operation = palette('Swap')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Swap Gate
      Swap the values of two qubits.
      (Place two in the same step.)
    TEXT
  end

  test 'Control gate popup' do
    visit circuit_path

    operation = palette('Control')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Control Gate
      Conditions on a qubit being ON.
      Gates in the same step only apply to states meeting the condition.
    TEXT
  end

  test 'Bloch display popup' do
    visit circuit_path

    operation = palette('Bloch')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Bloch Sphere Display
      Shows a wire's local state as a point on the Bloch sphere.
    TEXT
  end

  test '|0⟩ gate popup' do
    visit circuit_path

    operation = palette('|0>')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      |0⟩ Operation
      (Re)sets a qubit to state |0⟩.
    TEXT
  end

  test '|1⟩ gate popup' do
    visit circuit_path

    operation = palette('|1>')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      |1⟩ Operation
      (Re)sets a qubit to state |1⟩.
    TEXT
  end

  test 'Measurement gate popup' do
    visit circuit_path

    operation = palette('Measure')
    operation.hover

    assert_popup <<~TEXT.chomp, operation
      Measurement Gate
      Measures whether a qubit is ON or OFF.
    TEXT
  end
end
# rubocop:enable Metrics/ClassLength
