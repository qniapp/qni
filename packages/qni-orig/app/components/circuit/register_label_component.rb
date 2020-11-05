require 'component'

class Circuit::RegisterLabelComponent < Component
  attribute :label

  validates :label, presence: true
end
