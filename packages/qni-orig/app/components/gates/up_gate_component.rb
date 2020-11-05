require 'component'
require 'concerns/targetable'

class Gates::UpGateComponent < Component
  include Targetable

  attribute :bottom, default: false

  validates :bottom, inclusion: { in: [true, false] }

  def klass
    'instruction gate up-gate'
  end

  def data
    { targets: targets }
  end

  def bottom?
    bottom
  end
end
