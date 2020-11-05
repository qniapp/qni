require 'component'

class Circuit::CircuitBlockComponent < Component
  attribute :label

  validates :label, length: { minimum: 1 }
end
