# frozen_string_literal: true

require 'test_helper'

class Components::CircuitCardsHelperTest < ActionView::TestCase
  include Components::CircuitsHelper
  include Components::GatesHelper
  include TailwindUi::TabsHelper

  test 'circuit pills' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_pills)
      <div class="circuit-pills">
        #{pill text: 'Circuit', active: true, data: { action: 'circuit-card#showCircuit', target: 'circuit-card.circuitPill' }}
        #{pill text: 'Code', data: { action: 'circuit-card#showCode', target: 'circuit-card.codePill' }}
      </div>
    ERB
  end

  test 'circuit view' do
    expected =
      circuit do
        circuit_column { qubit_label label: '0x1' } +
          circuit_column { write value: 0 } +
          circuit_column { hadamard_gate } +
          circuit_column { readout value: 1 }
      end
    assert_dom_equal beautify(expected), beautify(circuit_view(circuit: circuits(:random_bit)))
  end

  test 'circuit code' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_code(code: 'h'))
      <div class="circuit-code hidden" data-target="circuit-card.code">
        <pre><code class="ruby" data-target="circuit-card.preCode">h</code></pre>
      </div>
    ERB
  end
end
