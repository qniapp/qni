require 'component'

class Gates::ShapeComponent < Component
  attribute :type
  attribute :label

  validates :type, presence: true
  validates :label, presence: true, if: :labelable?

  private

  def labelable?
    type == 'box' || type == 'circle' || type == 'swap'
  end
end
