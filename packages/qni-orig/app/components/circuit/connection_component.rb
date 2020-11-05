require 'component'

class Circuit::ConnectionComponent < Component
  attribute :position

  validates :position, presence: true
  validates :position, inclusion: { in: %i[top bottom] }
end
