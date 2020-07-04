# frozen_string_literal: true

require 'test_helper'

class Components::CircleNotationsHelperTest < ActionView::TestCase
  test 'circle notation' do
    assert_dom_equal beautify(<<~ERB), beautify(circle_notation(nqubit: 1) { qubit_circle_group { qubit_circle_group_row { qubit_circle(ket: 0, magnitude: 1) + qubit_circle(ket: 1, magnitude: 0) } } })
      <div class="circle-notation circle-notation--1qubit" data-controller="circle-notation">
        <div class="circle-notation__state-vector hidden" data-target="simulator.qubitCircleGroup" data-drawn="false">
          <div class="qubit-circle-group-row">
            #{qubit_circle(ket: 0, magnitude: 1)}
            #{qubit_circle(ket: 1, magnitude: 0)}
          </div>
        </div>
      </div>
    ERB
  end

  test 'qubit circuit group' do
    assert_dom_equal beautify(<<~ERB), beautify(qubit_circle_group { qubit_circle_group_row { qubit_circle(ket: 0, magnitude: 1) + qubit_circle(ket: 1, magnitude: 0) } })
      <div class="circle-notation__state-vector hidden" data-target="simulator.qubitCircleGroup" data-drawn="false">
        <div class="qubit-circle-group-row">
          #{qubit_circle(ket: 0, magnitude: 1)}
          #{qubit_circle(ket: 1, magnitude: 0)}
        </div>
      </div>
    ERB
  end

  test 'qubit circle group row' do
    assert_dom_equal beautify(<<~ERB), beautify(qubit_circle_group_row { qubit_circle(ket: 0, magnitude: 1) + qubit_circle(ket: 1, magnitude: 0) })
      <div class="qubit-circle-group-row">
        #{qubit_circle(ket: 0, magnitude: 1)}
        #{qubit_circle(ket: 1, magnitude: 0)}
      </div>
    ERB
  end

  test 'qubit circle (magnitude = 1)' do
    assert_dom_equal beautify(<<~ERB), beautify(qubit_circle(ket: 0, magnitude: 1))
      <div class="qubit-circle"
           data-target="circle-notation.qubitCircle"
           data-target="simulator.qubitCircle"
           data-ket="0"
           data-magnitude="1"
           data-magnitude-string="1"
           data-phase-string="0">
        <div class="qubit-circle__border"></div>
        <div class="qubit-circle__body">
          <div class="qubit-circle__magnitude"></div>
          <div class="qubit-circle__phase" style="--transform-rotate: 0deg;">
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

  test 'qubit circle (magnitude = √2/2, phase = π/2)' do
    assert_dom_equal beautify(<<~ERB), beautify(qubit_circle(ket: 0, magnitude: 0.7071067811865476, magnitude_string: 'sqrt(2)/2', phase: 90, phase_string: 'pi/2'))
      <div class="qubit-circle"
           data-target="circle-notation.qubitCircle"
           data-target="simulator.qubitCircle"
           data-ket="0"
           data-magnitude="0.7071067811865476"
           data-magnitude-string="√2/2"
           data-phase-string="π/2">
        <div class="qubit-circle__border"></div>
        <div class="qubit-circle__body">
          <div class="qubit-circle__magnitude"></div>
          <div class="qubit-circle__phase" style="--transform-rotate: -90deg;">
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
