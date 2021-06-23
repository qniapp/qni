require 'component'

class QubitCircleComponent < Component
  attribute :id
  attribute :klass

  validates :id, presence: true, length: { minimum: 1 }
end
