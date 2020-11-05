require 'component'

class CircuitCardComponent < Component
  attribute :circuit

  validates :circuit, presence: true
end
