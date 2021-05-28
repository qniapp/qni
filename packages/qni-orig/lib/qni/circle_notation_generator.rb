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

    MAX_NQUBIT = 8

    def body
      component 'state_vector', view: @view do
        state_vector_row.html_safe # rubocop:disable Rails/OutputSafety
      end
    end

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Rails/OutputSafety
    def state_vector_row
      circles.in_groups_of(64, false).map do |g64|
        component('qubit_circle_group', size: 64, view: @view) do
          g64.in_groups_of(32, false).map do |g32|
            component('qubit_circle_group', size: 32, view: @view) do
              g32.in_groups_of(16, false).map do |g16|
                component('qubit_circle_group', size: 16, view: @view) do
                  if g16.length < 9
                    component('qubit_circle_group', size: 8, view: @view) { g16[0..7].join.html_safe }
                  else
                    component('qubit_circle_group', size: 8, view: @view) { g16[0..7].join.html_safe } +
                      component('qubit_circle_group', size: 8, view: @view) { g16[8..15].join.html_safe }
                  end
                end
              end.join.html_safe
            end
          end.join.html_safe
        end
      end.join
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Rails/OutputSafety

    def circles
      (0..2**MAX_NQUBIT - 1).map do |ket|
        component 'qubit_circle', ket: ket, view: @view
      end
    end
  end
end
