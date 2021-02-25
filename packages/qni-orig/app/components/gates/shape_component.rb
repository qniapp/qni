require 'component'

class Gates::ShapeComponent < Component
  attribute :label
  attribute :type
  attribute :fill, default: false

  validates :label, presence: true, if: :labelable?
  validates :type, presence: true
  validates :fill, inclusion: { in: [true, false] }

  private

  def labelable?
    type == 'box' || type == 'circle' || type == 'swap'
  end
end
