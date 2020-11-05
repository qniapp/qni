require 'component'

class Gates::CircleComponent < Component
  attribute :label

  validates :label, presence: true
end
