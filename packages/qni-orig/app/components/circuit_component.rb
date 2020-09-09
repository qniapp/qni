require 'component'

class CircuitComponent < Component
  attribute :nqubit

  validates :nqubit, presence: true
  validates :nqubit, numericality: { only_integer: true }
end
