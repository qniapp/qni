require 'component'

class SimulatorComponent < Component
  attribute :nqubit

  validates :nqubit, presence: true
  validates :nqubit, numericality: { only_integer: true }
end
