require 'component'

class Circuit::DraggableComponent < Component
  attribute :palette, default: false
  attribute :write, default: false
  attribute :readout, default: false

  validates :palette, inclusion: { in: [true, false] }
  validates :write, inclusion: { in: [true, false] }
  validates :readout, inclusion: { in: [true, false] }

  def klass
    class_string('draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?,
                 'draggable--write' => write?,
                 'draggable--readout' => readout?)
  end

  def data
    { action: 'mouseover->editor#onDraggableMouseOver ' \
              'mousedown->editor#onDraggableMouseDown ' \
              'mouseup->editor#onDraggableMouseUp' }
  end

  private

  def circuit?
    !palette?
  end

  def palette?
    palette
  end

  def write?
    write
  end

  def readout?
    readout
  end
end
