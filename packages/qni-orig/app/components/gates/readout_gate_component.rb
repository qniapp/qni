require 'component'
require 'concerns/popuppable'

class Gates::ReadoutGateComponent < Component
  include Popuppable

  attribute :set

  def data
    { set: set, 'gate-label': set }.merge(data_popup)
  end

  private

  def popup_type
    :set
  end
end
