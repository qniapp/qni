require 'test_helper'

class CircuitTest
  class ErbTest < ActiveSupport::TestCase
    test 'Random bit' do
      circuit = circuits('random_bit')

      assert_equal erb_fixture('random_bit'), circuit.erb
    end

    test 'Random byte' do
      circuit = circuits('random_byte')

      assert_equal erb_fixture('random_byte'), circuit.erb
    end

    test 'Root-of-not' do
      circuit = circuits('root_of_not')

      assert_equal erb_fixture('root_of_not'), circuit.erb
    end

    test 'Quantum Spy Hunter' do
      circuit = circuits('quantum_spy_hunter')

      assert_equal erb_fixture('quantum_spy_hunter'), circuit.erb
    end

    test 'Separable qubits' do
      circuit = circuits('separable_qubits')

      assert_equal erb_fixture('separable_qubits'), circuit.erb
    end

    test 'Entangled qubits' do
      circuit = circuits('entangled_qubits')

      assert_equal erb_fixture('entangled_qubits'), circuit.erb
    end

    test 'Phase kickback' do
      circuit = circuits('phase_kickback')

      assert_equal erb_fixture('phase_kickback'), circuit.erb
    end

    test 'Swap test' do
      circuit = circuits('swap_test')

      assert_equal erb_fixture('swap_test'), circuit.erb
    end

    test 'Custom conditional phase' do
      circuit = circuits('custom_conditional_phase')

      assert_equal erb_fixture('custom_conditional_phase'), circuit.erb
    end

    test 'Remote controlled randomness' do
      circuit = circuits('remote_controlled_randomness')
      erb = circuit.erb.chomp

      assert_equal erb, circuit.erb
    end

    test 'Basic teleportation' do
      circuit = circuits('basic_teleportation')

      assert_equal erb_fixture('basic_teleportation'), circuit.erb
    end

    test 'Increment and decrement' do
      circuit = circuits('increment_and_decrement')

      assert_equal erb_fixture('increment_and_decrement'), circuit.erb
    end

    test 'Adding two quantum integers' do
      circuit = circuits('adding_two_quantum_integers')

      assert_equal erb_fixture('adding_two_quantum_integers'), circuit.erb
    end

    test 'Add-squared' do
      circuit = circuits('add_squared')

      assert_equal erb_fixture('add_squared'), circuit.erb
    end

    test 'Quantum conditional execution' do
      circuit = circuits('quantum_conditional_execution')

      assert_equal erb_fixture('quantum_conditional_execution'), circuit.erb
    end

    test 'Quantum conditional phase flip' do
      circuit = circuits('quantum_conditional_phase_flip')

      assert_equal erb_fixture('quantum_conditional_phase_flip'), circuit.erb
    end

    test 'CNOT logic' do
      circuit = circuits('cnot_logic')

      assert_equal erb_fixture('cnot_logic'), circuit.erb
    end

    test 'Apply mirror to flipped phase' do
      circuit = circuits('apply_mirror_to_flipped_phase')

      assert_equal erb_fixture('apply_mirror_to_flipped_phase'), circuit.erb
    end

    test 'Repeated iterations' do
      circuit = circuits('repeated_iterations')

      assert_equal erb_fixture('repeated_iterations'), circuit.erb
    end

    test 'Multiple flipped entries' do
      circuit = circuits('multiple_flipped_entries')

      assert_equal erb_fixture('multiple_flipped_entries'), circuit.erb
    end

    test 'QFT to distinguish 3 states' do
      circuit = circuits('qft_to_distinguish_3_states')

      assert_equal erb_fixture('qft_to_distinguish_3_states'), circuit.erb
    end

    test 'QFT of simple QPU signal' do
      circuit = circuits('qft_of_simple_qpu_signal')

      assert_equal erb_fixture('qft_of_simple_qpu_signal'), circuit.erb
    end

    test 'QFT square wave' do
      circuit = circuits('qft_square_wave')

      assert_equal erb_fixture('qft_square_wave'), circuit.erb
    end

    test 'QFT big square wave' do
      circuit = circuits('qft_big_square_wave')

      assert_equal erb_fixture('qft_big_square_wave'), circuit.erb
    end

    test 'QFT Frequency to state' do
      circuit = circuits('qft_frequency_to_state')

      assert_equal erb_fixture('qft_frequency_to_state'), circuit.erb
    end

    test 'QFT Prepare a state' do
      circuit = circuits('qft_prepare_a_state')

      assert_equal erb_fixture('qft_prepare_a_state'), circuit.erb
    end

    test 'QFT frequency manipulation' do
      circuit = circuits('qft_frequency_manipulation')

      assert_equal erb_fixture('qft_frequency_manipulation'), circuit.erb
    end

    test 'QFT rotating phases' do
      circuit = circuits('qft_rotating_phases')

      assert_equal erb_fixture('qft_rotating_phases'), circuit.erb
    end

    private

    def erb_fixture(name)
      File.read(Rails.root.join('test', 'fixtures', 'files', "#{name}.html.erb")).chomp
    end
  end
end
