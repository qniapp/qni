require 'component'
require 'concerns/targetable'

class Gates::DownGateComponent < Component
  include Targetable

  def klass
    'instruction gate down-gate'
  end

  def data
    { targets: targets.first }
  end
end
