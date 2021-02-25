require 'component'

class Gates::ReadoutGateComponent < Component
  attribute :set

  def data
    { set: set, controller: 'gate-popup' }
  end
end
