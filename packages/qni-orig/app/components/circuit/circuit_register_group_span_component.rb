require 'component'

class Circuit::CircuitRegisterGroupSpanComponent < Component
  attribute :rows

  validates :rows, numericality: { only_integer: true, greater_than: 0, less_than: 9 }
end
