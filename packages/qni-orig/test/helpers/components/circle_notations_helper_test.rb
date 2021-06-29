# frozen_string_literal: true

require 'test_helper'

class Components::CircleNotationsHelperTest < ActionView::TestCase
  include ComponentsHelper
  include QubitCircleHelper

  test 'circle notation' do
    assert_dom_equal beautify(<<~ERB), beautify(component('circle_notation', nqubit: 1))
      <div class="w-screen h-screen fixed flex justify-center z-40">
        <div id="circle-notation" class="circle-notation" data-controller="circle-notation" data-simulator-target="circleNotation" data-editor-target="circleNotation" data-circle-notation-nqubit="1" data-circle-notation-max-nqubit="10"></div>
      </div>
      #{qubit_circle id: 'qubit-circle-template', klass: 'hidden'}
      <div id="qubit-circle-popup" class="qubit-circle-popup hidden"></div>
    ERB
  end

  test 'qubit circle' do
    assert_dom_equal beautify(<<~ERB), beautify(component('qubit_circle', id: 'test'))
      <div id="test"
           class="qubit-circle qubit-circle--magnitude-0"
           data-circle-notation-target="qubitCircle"
           data-action="mouseenter->circle-notation#showPopup">
        <div class="qubit-circle__magnitude"></div>
        <div class="qubit-circle__phase"></div>
      </div>
    ERB
  end
end
