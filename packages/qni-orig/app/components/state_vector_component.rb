require 'component'

class StateVectorComponent < Component
  attribute :hidden, default: true

  validates :hidden, inclusion: { in: [true, false] }

  def hidden?
    hidden
  end
end
