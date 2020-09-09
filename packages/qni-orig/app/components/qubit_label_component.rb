require 'component'

class QubitLabelComponent < Component
  attribute :label

  validates :label, presence: true
end
