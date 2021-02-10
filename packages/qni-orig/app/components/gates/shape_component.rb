require 'component'

class Gates::ShapeComponent < Component
  attribute :type
  attribute :label

  validates :type, presence: true
  validates :label, presence: true
end
