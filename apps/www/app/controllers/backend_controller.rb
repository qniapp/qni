require 'cirq'

class BackendController < ApplicationController
  # rubocop:disable Metrics/AbcSize
  def show
    backend = params[:backend]
    circuit_id = params[:id]
    qubit_count = params[:qubitCount].to_i
    step_index = params[:stepIndex].to_i
    steps = params[:steps] ? JSON.parse(params[:steps]) : []
    targets = params[:targets].split(',').map(&:to_i) if params[:targets]

    raise "Unsupported backend: #{backend}" unless backend == 'cirq'

    @step_results =
      Cirq.new(circuit_id: circuit_id, qubit_count: qubit_count, step_index: step_index, steps: steps, targets: targets)
        .run
  end
  # rubocop:enable Metrics/AbcSize
end
