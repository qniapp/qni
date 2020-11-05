require 'component'

class CircuitThumbnailComponent < Component
  attribute :circuit

  validate :validate_circuit

  private

  def validate_circuit
    circuit.is_a?(Circuit)
  end
end
