class CircleNotationComponent < Component
  attribute :nqubit

  validates :nqubit, numericality: { only_integer: true, greater_than: 0, less_than: 9 }

  def klass
    class_string('circle-notation')
  end

  def data
    { controller: 'circle-notation',
      target: 'simulator.circleNotation editor.circleNotation',
      circle_notation_nqubit: nqubit }
  end
end
