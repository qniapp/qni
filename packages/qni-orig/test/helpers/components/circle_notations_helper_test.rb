# frozen_string_literal: true

require 'test_helper'

class Components::CircleNotationsHelperTest < ActionView::TestCase
  include ComponentsHelper
  include QubitCircleHelper

  test 'circle notation' do
    assert_dom_equal beautify(<<~ERB), beautify(component('circle_notation', nqubit: 1))
      <div id="circle-notation" class="circle-notation" data-controller="circle-notation" data-simulator-target="circleNotation" data-editor-target="circleNotation" data-circle-notation-nqubit="1">
      </div>
      #{qubit_circle id: 'qubit-circle-template'}
      <div id="qubit-circle-popup" class="qubit-circle-popup hidden"></div>
    ERB
  end

  test 'qubit circle' do
    assert_dom_equal beautify(<<~ERB), beautify(component('qubit_circle', id: 'test'))
      <div id="test"
           class="qubit-circle"
           data-circle-notation-target="qubitCircle"
           data-magnitude="0.00000"
           data-action="mouseenter->circle-notation#showPopup">
        <div class="relative">
          <div class="qubit-circle__magnitude"></div>
          <svg class="qubit-circle__phase" width="64" height="64" viewBox="0 0 64 64" stroke-linecap="round">
            <line class="qubit-circle__phase-line" x1="32" y1="32" x2="32" y2="0" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke" />
          </svg>
          <div class="qubit-circle__border"></div>
        </div>
      </div>
    ERB
  end
end
