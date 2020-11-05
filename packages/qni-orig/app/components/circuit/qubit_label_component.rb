require 'component'

class Circuit::QubitLabelComponent < Component
  attribute :label

  validates :label, presence: true
end
