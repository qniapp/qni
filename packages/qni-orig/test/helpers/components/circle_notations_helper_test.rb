# frozen_string_literal: true

require 'test_helper'

class Components::CircleNotationsHelperTest < ActionView::TestCase
  include ComponentsHelper
  include QubitCircleHelper

  test 'circle notation' do
    assert_dom_equal beautify(<<~ERB), beautify(component('circle_notation', nqubit: 1))
      <div class="w-screen h-screen fixed flex justify-center z-40">
        <div id="circle-notation" class="circle-notation" data-controller="circle-notation" data-simulator-target="circleNotation" data-editor-target="circleNotation" data-circle-notation-nqubit="1" data-circle-notation-max-nqubit="10">
          #{qubit_circle id: 'qubit-circle-template', class: 'hidden'}

          <div class="qubit-circle-popup hidden" data-circle-notation-target="popup">
            <div class="qubit-circle-popup__ket">|<span class="qubit-circle-popup__ket-binary"></span>&#x27e9; (decimal <span class="qubit-circle-popup__ket-decimal"></span>)</div>
            <ul class="list-none">
              <li>Amplitude: <span class="qubit-circle-popup__amplitude-real"></span><span class="qubit-circle-popup__amplitude-imag"></span></li>
              <li>Probability: <span class="qubit-circle-popup__probability"></span></li>
              <li>Phase: <span class="qubit-circle-popup__phase"></span></li>
            </ul>
          </div>
        </div>
      </div>
    ERB
  end

  test 'qubit circle' do
    assert_dom_equal beautify(<<~ERB), beautify(qubit_circle(id: 'test'))
      <div id="test"
           class="qubit-circle qubit-circle--magnitude-0"
           data-circle-notation-target="qubitCircle"
           data-action="mouseenter->circle-notation#setPopupContent">
        <div class="qubit-circle__magnitude"></div>
        <div class="qubit-circle__phase"></div>
      </div>
    ERB
  end
end
