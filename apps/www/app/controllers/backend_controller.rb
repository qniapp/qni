# frozen_string_literal: true

require 'cu_quantum'

class BackendController < ApplicationController
  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  def show
    backend = params[:backend]
    circuit_id = params[:id]
    qubit_count = params[:qubitCount].to_i
    step_index = params[:stepIndex].to_i
    steps = params[:steps] ? JSON.parse(params[:steps]) : []
    targets = params[:targets].split(',').map(&:to_i) if params[:targets]

    raise "Unsupported backend: #{backend}" unless backend == 'cu_quantum'

    @step_results = CuQuantum.new(circuit_id: circuit_id,
                                  qubit_count: qubit_count,
                                  step_index: step_index,
                                  steps: steps,
                                  targets: targets).run
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength
end
