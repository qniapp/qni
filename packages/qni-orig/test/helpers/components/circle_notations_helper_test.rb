# frozen_string_literal: true

require 'test_helper'

class Components::CircleNotationsHelperTest < ActionView::TestCase
  include ComponentsHelper

  test 'circle notation' do
    assert_dom_equal beautify(<<~ERB), beautify(component('circle_notation', nqubit: 1) { component('state_vector') { component('qubit_circle_group', size: 16) { component('qubit_circle', ket: 0, magnitude: 1) + component('qubit_circle', ket: 1, magnitude: 0) } } })
      <div id="circle-notation" class="circle-notation" data-controller="circle-notation" data-simulator-target="circleNotation" data-editor-target="circleNotation" data-circle-notation-nqubit="1">
        <div class="state-vector" data-simulator-target="stateVector" data-drawn="false">
          <div class="qubit-circle-group--size16">
            #{component('qubit_circle', ket: 0, magnitude: 1)}
            #{component('qubit_circle', ket: 1, magnitude: 0)}
          </div>
        </div>
        <div id="qubit-circle-tooltip" class="qubit-circle-tooltip hidden"></div>
      </div>
    ERB
  end

  test 'qubit circuit group' do
    assert_dom_equal beautify(<<~ERB), beautify(component('state_vector') { component('qubit_circle_group', size: 16) { component('qubit_circle', ket: 0, magnitude: 1) + component('qubit_circle', ket: 1, magnitude: 0) } })
      <div class="state-vector" data-simulator-target="stateVector" data-drawn="false">
        <div class="qubit-circle-group--size16">
          #{component('qubit_circle', ket: 0, magnitude: 1)}
          #{component('qubit_circle', ket: 1, magnitude: 0)}
        </div>
      </div>
    ERB
  end

  test 'qubit circle group row' do
    assert_dom_equal beautify(<<~ERB), beautify(component('qubit_circle_group', size: 16) { component('qubit_circle', ket: 0, magnitude: 1) + component('qubit_circle', ket: 1, magnitude: 0) })
      <div class="qubit-circle-group--size16">
        #{component('qubit_circle', ket: 0, magnitude: 1)}
        #{component('qubit_circle', ket: 1, magnitude: 0)}
      </div>
    ERB
  end

  test 'qubit circle' do
    assert_dom_equal beautify(<<~ERB), beautify(component('qubit_circle', ket: 0))
      <div class="qubit-circle"
           data-circle-notation-target="qubitCircle"
           data-ket="0"
           data-magnitude="0.000"
           data-action="mouseenter->circle-notation#qubitCircleMouseEnter mouseleave->circle-notation#qubitCircleMouseLeave">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle class="qubit-circle__magnitude" cx="50" cy="50" r="48" fill="none"></circle>
          <line class="qubit-circle__phase" x1="50" y1="50" x2="50" y2="2" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></line>
          <circle class="qubit-circle__border" cx="50" cy="50" r="48" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
        </svg>
        <div class="qubit-circle__ket">|0&#10217;</div>
      </div>
    ERB
  end
end
