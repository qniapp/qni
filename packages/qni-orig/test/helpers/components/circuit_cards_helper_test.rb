# frozen_string_literal: true

require 'test_helper'

class Components::CircuitCardsHelperTest < ActionView::TestCase
  include Components::CircuitsHelper
  include Components::GatesHelper

  test 'circuit view' do
    expected =
      circuit(nqubit: 1) do
        circuit_column { qubit_label label: '0x1' } +
          circuit_column { write value: 0 } +
          circuit_column { hadamard_gate } +
          circuit_column { readout value: 1 }
      end
    assert_dom_equal beautify(expected), beautify(circuit_view(circuit: circuits(:random_bit)))
  end
end
