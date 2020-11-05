require 'component'

class Circuit::RegisterLabelSpanComponent < Component
  attribute :label
  attribute :start
  attribute :span

  validates :label, length: { minimum: 1 }
  validates :start, numericality: { only_integer: true, greater_than: 0 }
  validates :span, numericality: { only_integer: true, greater_than: 0 }
end
