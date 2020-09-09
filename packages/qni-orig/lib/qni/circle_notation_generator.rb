require 'qni/dsl'

module Qni
  class CircleNotationGenerator
    include ComponentsHelper

    def initialize(circuit, view)
      @circuit = circuit
      @view = view
      @dsl = Dsl.load(@circuit.dsl)
    end

    def generate
      component 'circle_notation', nqubit: @dsl.nqubit, view: @view do
        body
      end
    end

    private

    def body
      component 'state_vector', view: @view do
        state_vector_row.html_safe # rubocop:disable Rails/OutputSafety
      end
    end

    def state_vector_row
      if @dsl.nqubit > 3
        large_state_vector_row
      else
        small_state_vector_row
      end
    end

    def small_state_vector_row
      circles.in_groups_of(16, false).map do |slice|
        component 'state_vector/row', view: @view do
          slice.join.html_safe # rubocop:disable Rails/OutputSafety
        end
      end.join
    end

    def large_state_vector_row
      circles.in_groups_of(16, false).map do |slice|
        component 'state_vector/row', view: @view do
          <<~HTML.html_safe # rubocop:disable Rails/OutputSafety
            <div class="qubit-circle-octet">#{slice[0..7].join}</div>
            <div class="qubit-circle-octet">#{slice[8..15].join}</div>
          HTML
        end
      end.join
    end

    def circles
      (0..2**@dsl.nqubit - 1).map do |ket|
        component 'qubit_circle', ket: ket, view: @view
      end
    end
  end
end
