require 'component'

class QubitCircleComponent < Component
  attribute :id

  validates :id, presence: true, length: { minimum: 1 }
end
