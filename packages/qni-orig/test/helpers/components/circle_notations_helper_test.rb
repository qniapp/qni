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
           data-simulator-target="qubitCircle"
           data-ket="0"
           data-magnitude="0.000"
           data-action="mouseenter->circle-notation#qubitCircleMouseEnter mouseleave->circle-notation#qubitCircleMouseLeave">
        <svg width="116" height="116" viewBox="0 0 116 116">
          <line class="qubit-circle__phase" x1="58" y1="58" x2="58" y2="6" stroke-width="2" vector-effect="non-scaling-stroke"></line>
          <g class="qubit-circle__magnitude-g">
            <circle class="qubit-circle__magnitude" cx="58" cy="58" r="50" fill="none"></circle>
            <line class="qubit-circle__phase-dark" x1="58" y1="58" x2="58" y2="8" stroke-width="2" vector-effect="non-scaling-stroke"></line>
          </g>
          <circle class="qubit-circle__border" cx="58" cy="58" r="50" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
          <circle class="qubit-circle__phase-dot" cx="58" cy="8" r="8"></circle>
        </svg>
        <span class="qubit-circle__ket">|0&#10217;</span>
      </div>
    ERB
  end
end
