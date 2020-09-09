# frozen_string_literal: true

require 'test_helper'

class Components::CircleNotationsHelperTest < ActionView::TestCase
  include ComponentsHelper

  test 'circle notation' do
    assert_dom_equal beautify(<<~ERB), beautify(component('circle_notation', nqubit: 1) { component('state_vector') { component('state_vector/row') { component('qubit_circle', ket: 0, magnitude: 1) + component('qubit_circle', ket: 1, magnitude: 0) } } })
      <div id="circle-notation" class="circle-notation circle-notation--1qubit" data-controller="circle-notation" data-target="simulator.circleNotation">
        <div class="state-vector" data-target="simulator.stateVector" data-drawn="false">
          <div class="state-vector__row">
            #{component('qubit_circle', ket: 0, magnitude: 1)}
            #{component('qubit_circle', ket: 1, magnitude: 0)}
          </div>
        </div>
      </div>
    ERB
  end

  test 'qubit circuit group' do
    assert_dom_equal beautify(<<~ERB), beautify(component('state_vector') { component('state_vector/row') { component('qubit_circle', ket: 0, magnitude: 1) + component('qubit_circle', ket: 1, magnitude: 0) } })
      <div class="state-vector" data-target="simulator.stateVector" data-drawn="false">
        <div class="state-vector__row">
          #{component('qubit_circle', ket: 0, magnitude: 1)}
          #{component('qubit_circle', ket: 1, magnitude: 0)}
        </div>
      </div>
    ERB
  end

  test 'qubit circle group row' do
    assert_dom_equal beautify(<<~ERB), beautify(component('state_vector/row') { component('qubit_circle', ket: 0, magnitude: 1) + component('qubit_circle', ket: 1, magnitude: 0) })
      <div class="state-vector__row">
        #{component('qubit_circle', ket: 0, magnitude: 1)}
        #{component('qubit_circle', ket: 1, magnitude: 0)}
      </div>
    ERB
  end

  test 'qubit circle' do
    assert_dom_equal beautify(<<~ERB), beautify(component('qubit_circle', ket: 0))
      <div class="qubit-circle"
           data-target="circle-notation.qubitCircle"
           data-target="simulator.qubitCircle"
           data-ket="0">
        <div class="qubit-circle__tooltip hidden">
          <div class="text-center font-bold">|0&gt;</div>
        </div>
        <div class="qubit-circle__border"></div>
        <div class="qubit-circle__body">
          <div class="qubit-circle__magnitude"></div>
          <div class="qubit-circle__phase">
            <div class="relative w-full h-full">
              <div class="qubit-circle__phase-line"></div>
              <dev class="qubit-circle__phase-magnitude"></dev>
              <div class="qubit-circle__phase-dot"></div>
            </div>
          </div>
        </div>
        <span class="qubit-circle__ket">|0&#10217;</span>
      </div>
    ERB
  end
end
