require 'component'

class CircleNotationComponent < Component
  attribute :nqubit

  validates :nqubit, numericality: { only_integer: true, greater_than: 0, less_than: 9 }

  def data
    { controller: 'circle-notation',
      simulator_target: 'circleNotation',
      editor_target: 'circleNotation',
      circle_notation_nqubit: nqubit,
      circle_notation_max_nqubit: Qni::MAX_NQUBIT }
  end
end
