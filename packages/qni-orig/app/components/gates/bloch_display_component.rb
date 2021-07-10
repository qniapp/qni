require 'component'
require 'concerns/draggable'

class Gates::BlochDisplayComponent < Component
  include Draggable

  def klass
    class_string('gate',
                 'bloch-display',
                 'draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?)
  end

  def data
    draggable_action = data_draggable[:action]
    data_draggable.merge({ bloch_display_d: 0,
                           controller: 'bloch-display',
                           action: "#{draggable_action} blochDisplayUpdated->bloch-display#updatePopup" })
  end
end
