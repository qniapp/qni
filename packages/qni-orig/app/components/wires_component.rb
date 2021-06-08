require 'component'

class WiresComponent < Component
  attribute :wireable, default: true

  validates :wireable, inclusion: { in: [true, false] }

  def wireable?
    wireable
  end
end
