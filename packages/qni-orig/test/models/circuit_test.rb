require 'test_helper'

class CircuitTest
  class ErbTest < ActiveSupport::TestCase
    test 'Random bit' do
      circuit = circuits('random_bit')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Random byte' do
      circuit = circuits('random_byte')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Root-of-not' do
      circuit = circuits('root_of_not')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Quantum Spy Hunter' do
      circuit = circuits('quantum_spy_hunter')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Separable qubits' do
      circuit = circuits('separable_qubits')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Entangled qubits' do
      circuit = circuits('entangled_qubits')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Phase kickback' do
      circuit = circuits('phase_kickback')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Swap test' do
      circuit = circuits('swap_test')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Custom conditional phase' do
      circuit = circuits('custom_conditional_phase')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Remote controlled randomness' do
      circuit = circuits('remote_controlled_randomness')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Basic teleportation' do
      circuit = circuits('basic_teleportation')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Increment and decrement' do
      circuit = circuits('increment_and_decrement')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Adding two quantum integers' do
      circuit = circuits('adding_two_quantum_integers')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Add-squared' do
      circuit = circuits('add_squared')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Quantum conditional execution' do
      circuit = circuits('quantum_conditional_execution')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Quantum conditional phase flip' do
      circuit = circuits('quantum_conditional_phase_flip')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'CNOT logic' do
      circuit = circuits('cnot_logic')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Apply mirror to flipped phase' do
      circuit = circuits('apply_mirror_to_flipped_phase')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Repeated iterations' do
      circuit = circuits('repeated_iterations')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'Multiple flipped entries' do
      circuit = circuits('multiple_flipped_entries')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'QFT to distinguish 3 states' do
      circuit = circuits('qft_to_distinguish_3_states')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'QFT of simple QPU signal' do
      circuit = circuits('qft_of_simple_qpu_signal')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'QFT square wave' do
      circuit = circuits('qft_square_wave')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'QFT big square wave' do
      circuit = circuits('qft_big_square_wave')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'QFT Frequency to state' do
      circuit = circuits('qft_frequency_to_state')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'QFT Prepare a state' do
      circuit = circuits('qft_prepare_a_state')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'QFT frequency manipulation' do
      circuit = circuits('qft_frequency_manipulation')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end

    test 'QFT rotating phases' do
      circuit = circuits('qft_rotating_phases')
      erb = circuit.erb.chomp

      circuit.generate_erb

      assert_equal erb, circuit.erb
    end
  end

  class CircleNotationTest < ActiveSupport::TestCase
    test 'Random bit' do
      circuit = circuits('random_bit')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Random byte' do
      circuit = circuits('random_byte')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Root-of-not' do
      circuit = circuits('root_of_not')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Quantum Spy Hunter' do
      circuit = circuits('quantum_spy_hunter')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Separable qubits' do
      circuit = circuits('separable_qubits')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Entangled qubits' do
      circuit = circuits('entangled_qubits')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Phase kickback' do
      circuit = circuits('phase_kickback')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Swap test' do
      circuit = circuits('swap_test')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Custom conditional phase' do
      circuit = circuits('custom_conditional_phase')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Remote controlled randomness' do
      circuit = circuits('remote_controlled_randomness')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Basic teleportation' do
      circuit = circuits('basic_teleportation')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Increment and decrement' do
      circuit = circuits('increment_and_decrement')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Adding two quantum integers' do
      circuit = circuits('adding_two_quantum_integers')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Add-squared' do
      circuit = circuits('add_squared')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Quantum conditional execution' do
      circuit = circuits('quantum_conditional_execution')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Quantum conditional phase flip' do
      circuit = circuits('quantum_conditional_phase_flip')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'CNOT logic' do
      circuit = circuits('cnot_logic')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Apply mirror to flipped phase' do
      circuit = circuits('apply_mirror_to_flipped_phase')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Repeated iterations' do
      circuit = circuits('repeated_iterations')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'Multiple flipped entries' do
      circuit = circuits('multiple_flipped_entries')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'QFT to distinguish 3 states' do
      circuit = circuits('qft_to_distinguish_3_states')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'QFT of simple QPU signal' do
      circuit = circuits('qft_of_simple_qpu_signal')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'QFT square wave' do
      circuit = circuits('qft_square_wave')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'QFT big square wave' do
      skip '時間がかかるので一旦スキップ'

      circuit = circuits('qft_big_square_wave')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'QFT Frequency to state' do
      circuit = circuits('qft_frequency_to_state')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'QFT Prepare a state' do
      circuit = circuits('qft_prepare_a_state')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'QFT frequency manipulation' do
      circuit = circuits('qft_frequency_manipulation')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end

    test 'QFT rotating phases' do
      circuit = circuits('qft_rotating_phases')
      circle_notation = circuit.circle_notation.chomp

      circuit.generate_circle_notation

      assert_equal circle_notation, circuit.circle_notation
    end
  end
end
