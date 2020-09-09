# frozen_string_literal: true

require 'test_helper'

class Components::CircuitCardsHelperTest < ActionView::TestCase
  include Components::CircuitsHelper
  include ComponentsHelper

  test 'circuit view' do
    expected =
      component('circuit', nqubit: 1) do
        component('circuit/step') { component 'qubit_label', label: '0x1' } +
          component('circuit/step') { component 'rw', type: :write, value: 0 } +
          component('circuit/step') { component 'hadamard_gate' } +
          component('circuit/step') { component 'rw', type: :readout }
      end
    assert_dom_equal beautify(expected), beautify(circuit_view(circuit: circuits(:random_bit)))
  end
end
