# frozen_string_literal: true

require 'json'

class Cirq
  def initialize(circuit_id:, qubit_count:, step_index:, steps:, targets:)
    @circuit_id = circuit_id
    @qubit_count = qubit_count
    @step_index = step_index
    @steps = steps
    @targets = targets
  end

  # rubocop:disable Metrics/MethodLength
  def run
    json = {
      circuit_id: @circuit_id,
      qubit_count: @qubit_count,
      step_index: @step_index,
      steps: @steps,
      targets: @targets
    }.to_json

    result_json = nil

    IO.popen(Rails.root.join('bin/cirq.py').to_s, 'r+') do |io|
      io.puts json
      io.close_write
      result_json = io.gets
    end

    JSON.parse(result_json)
  end
  # rubocop:enable Metrics/MethodLength
end
