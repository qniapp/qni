# frozen_string_literal: true

require 'test_helper'

class Components::CircuitCardsHelperTest < ActionView::TestCase
  include CircuitHelper
  include ComponentsHelper
  include GatesHelper

  test 'circuit view' do
    expected =
      component('circuit', nqubit: 1) do
        circuit_step { qubit_label '0x1' } +
          circuit_step { dropzone { draggable(write: true) { write 0 } } } +
          circuit_step { dropzone { draggable { hadamard_gate } } } +
          circuit_step { dropzone { draggable(readout: true) { readout } } } +
          circuit_step(shadow_source: true) { dropzone }
      end
    assert_dom_equal beautify(expected), beautify(circuit_view(circuit: circuits(:random_bit)))
  end
end
