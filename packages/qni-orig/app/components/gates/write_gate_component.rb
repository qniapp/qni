require 'component'
require 'concerns/draggable'

class Gates::WriteGateComponent < Component
  include Draggable

  attribute :value
  attribute :set

  validates :value, inclusion: { in: [0, 1] }, if: :value

  def klass
    class_string('gate',
                 'write-gate',
                 'draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?)
  end

  def data
    { value: value }.merge(data_draggable)
  end
end
