require 'component'
require 'concerns/draggable'

class BlochDisplayComponent < Component
  include Draggable

  DEFAULT_D = 0

  def klass
    class_string('gate',
                 'bloch-display',
                 'draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?)
  end

  def data
    data_action = [data_draggable[:action], 'blochDisplayUpdated->bloch-display#updatePopup'].join(' ')
    data_draggable.merge({ bloch_display_d: DEFAULT_D,
                           controller: 'bloch-display',
                           action: data_action })
  end
end
