require 'component'
require 'concerns/draggable'
require 'concerns/popuppable'

class Gates::ReadoutGateComponent < Component
  include Draggable
  include Popuppable

  attribute :set

  def klass
    class_string('gate',
                 'readout-gate',
                 'draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?)
  end

  def data
    { set: set, 'gate-label': set }.merge(data_popup).merge(data_draggable)
  end

  private

  def popup_type
    :set
  end
end
