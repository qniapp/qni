# frozen_string_literal: true

require 'test_helper'

class Components::CircuitsHelperTest < ActionView::TestCase
  include Components::GatesHelper

  test 'circuit breakpoint' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_breakpoint)
      <div class="circuit-breakpoint">
        <div class="circuit-breakpoint__line"></div>
      </div>
    ERB
  end

  test 'circuit column' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_column { hadamard_gate })
      <div class="circuit-column"
           data-action="click->simulator#circuitColumnClicked"
           data-target="simulator.circuitColumn">
        <div class="flex flex-col">
          #{hadamard_gate}
        </div>
        #{circuit_breakpoint}
      </div>
    ERB
  end

  test 'circuit block' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_block(label: 'set value') { not_gate })
      <div class="circuit-block">
        <div class="circuit-block__label circuit-block__label--top">
          <span>set value</span>
        </div>
        <div class="circuit-block__body">
          #{not_gate}
        </div>
        <div class="circuit-block__label circuit-block__label--bottom">
          <span>set value</span>
        </div>
      </div>
    ERB
  end

  test 'circuit block divider' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_block_divider { wire })
      <div class="circuit-block-divider">
        <div class="circuit-block-divider__body">
          #{wire}
        </div>
      </div>
    ERB
  end

  test 'qubit label' do
    assert_dom_equal beautify(<<~ERB), beautify(qubit_label(label: '0x1'))
      <div class="qubit-label">
        <div class="qubit-label__wire"></div>
        <span class="qubit-label__value">0x1</span>
      </div>
    ERB
  end

  test 'register label' do
    assert_dom_equal beautify(<<~ERB), beautify(register_label(label: '👩Alice'))
      <div class="register-label">
        <span>👩Alice</span>
      </div>
    ERB
  end

  test 'circuit register column' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_register_column { register_label label: '👩Alice' })
      <div class="flex flex-col">
        #{register_label label: '👩Alice'}
      </div>
    ERB
  end

  test 'circuit register column span' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_register_column_span(rows: 6) { register_label_span(label: 'a', row_span: 4) + register_label_span(label: 'b', row_span: 2) })
      <div class="grid gap-2 grid-cols-1 grid-rows-6 mr-2 flex-shrink-0">
        #{register_label_span label: 'a', row_span: 4}
        #{register_label_span label: 'b', row_span: 2}
      </div>
    ERB
  end

  test 'register label span' do
    assert_dom_equal beautify(<<~ERB), beautify(register_label_span(label: 'register a', row_span: 3))
      <div class="register-label-span row-span-3">
        <span class="register-label-span__label">register a</span>
      </div>
    ERB
  end
end
