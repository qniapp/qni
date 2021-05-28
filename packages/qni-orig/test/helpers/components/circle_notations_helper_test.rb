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
           data-magnitude="0">
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
