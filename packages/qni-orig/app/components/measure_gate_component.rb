require 'component'
require 'concerns/draggable'

class MeasureGateComponent < Component
  include Draggable

  attribute :flag

  def klass
    class_string('gate',
                 'measure-gate',
                 'draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?)
  end

  def data
    { flag: flag, 'gate-label': flag }.merge(data_draggable)
  end
end
