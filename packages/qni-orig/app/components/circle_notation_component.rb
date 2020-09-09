class CircleNotationComponent < Component
  attribute :nqubit

  validates :nqubit, presence: true
end
