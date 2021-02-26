require 'component'

class Gates::ShapeComponent < Component
  attribute :label
  attribute :type
  attribute :fill, default: false

  validates :label, presence: true
  validates :type, presence: true, inclusion: { in: %w[square circle] }
  validates :fill, inclusion: { in: [true, false] }
end
