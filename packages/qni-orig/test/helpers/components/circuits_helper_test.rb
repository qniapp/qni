# frozen_string_literal: true

require 'test_helper'

class Components::CircuitsHelperTest < ActionView::TestCase
  include CircuitHelper
  include Components::GatesHelper
  include ComponentsHelper

  test 'circuit block' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_block(label: 'set value') { not_gate })
      <div class="circuit-block">
        <div class="circuit-block__label circuit-block__label--top">
          set value
        </div>
        <div class="circuit-block__body">
          #{not_gate}
        </div>
        <div class="circuit-block__label circuit-block__label--bottom">
          set value
        </div>
      </div>
    ERB
  end

  test 'circuit block divider' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_block_divider { dropzone })
      <div class="circuit-block-divider">
        <div class="circuit-block-divider__body">
          #{dropzone}
        </div>
      </div>
    ERB
  end

  test 'qubit label' do
    assert_dom_equal beautify(<<~ERB), beautify(qubit_label('0x1'))
      <div class="instruction qubit-label" data-value="0x1">
        <div class="qubit-label__wire"></div>
        <span class="qubit-label__value">0x1</span>
      </div>
    ERB
  end

  test 'register label' do
    assert_dom_equal beautify(<<~ERB), beautify(register_label('👩Alice'))
      <div class="register-label">
        <span class="register-label__value">👩Alice</span>
      </div>
    ERB
  end

  test 'circuit register group' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_register_group { register_label '👩Alice' })
      <div class="circuit-register-group">
        #{register_label '👩Alice'}
      </div>
    ERB
  end

  test 'circuit register column span' do
    assert_dom_equal beautify(<<~ERB), beautify(circuit_register_group_span(rows: 6) { register_label_span(label: 'a', start: 3, span: 4) + register_label_span(label: 'b', start: 1, span: 2) })
      <div class="circuit-register-group-span qubits-6">
        #{register_label_span label: 'a', start: 3, span: 4}
        #{register_label_span label: 'b', start: 1, span: 2}
      </div>
    ERB
  end

  test 'register label span' do
    assert_dom_equal beautify(<<~ERB), beautify(register_label_span(label: 'register a', start: 1, span: 3))
      <div class="register-label-span reg-start-1 reg-end-4 span-3">
        <span class="register-label-span__label">register a</span>
      </div>
    ERB
  end
end
