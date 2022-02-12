class Cirq
  def initialize(circuit_id:, qubit_count:, step_index:, steps:, targets:)
    @circuit_id = circuit_id
    @qubit_count = qubit_count
    @step_index = step_index
    @steps = steps
    @targets = targets
  end

  def run
    @steps.map.with_index { |each, index| execute_step each, index }
  end

  private

  # rubocop:disable Metrics/MethodLength
  # rubocop:disable Metrics/CyclomaticComplexity
  # rubocop:disable Metrics/AbcSize
  def execute_step(step, index)
    measured_bits = {}

    step.each_with_index do |each, bit|
      case each.fetch('type')
      when 'H'
        # {"type"=>"H", "controls"=>[], "if"=>nil}
      when 'X'
        # {"type"=>"X", "controls"=>[], "if"=>nil}
      when 'Y'
        # {"type"=>"Y", "controls"=>[], "if"=>nil}
      when 'Z'
        # {"type"=>"Z", "controls"=>[], "if"=>nil}
      when 'P'
        # {"type"=>"P", "phi"=>"pi/2", "controls"=>[], "targets"=>[0], "if"=>nil}
      when 'X^½'
        # {"type"=>"X^½", "controls"=>[], "if"=>nil}
      when 'Rx'
        # {"type"=>"Rx", "theta"=>"pi/2", "controls"=>[], "targets"=>[], "if"=>nil}
      when 'Ry'
        # {"type"=>"Ry", "theta"=>"pi/2", "controls"=>[], "targets"=>[], "if"=>nil}
      when 'Rz'
        # {"type"=>"Rz", "theta"=>"pi/2", "controls"=>[], "targets"=>[], "if"=>nil}
      when 'Swap'
        # {"type"=>"Swap", "controls"=>[], "targets"=>[]}
      when '•'
        # {"type"=>"•", "targets"=>[0]}
      when 'Bloch'
        # {"type"=>"Bloch"}
      when 'Write'
        # {"type"=>"Write", "value"=>0}
      when 'Measure'
        # {"type"=>"Measure", "flag"=>""}
        measured_bits[bit] = [0, 1].sample # rubocop:disable Performance/CollectionLiteralInLoop
      when '1'
        # NOP
      else
        raise "Unknown operation: #{each.inspect}"
      end
    end

    amplitudes = (@targets.index_with { [rand, 0] } if index == @step_index)

    { amplitudes: amplitudes, measuredBits: measured_bits, blochVectors: {} }
  end
  # rubocop:enable Metrics/MethodLength
  # rubocop:enable Metrics/CyclomaticComplexity
  # rubocop:enable Metrics/AbcSize
end
