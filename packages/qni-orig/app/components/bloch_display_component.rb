# frozen_string_literal: true

class BlochDisplayComponent < ViewComponent::Base
  def initialize(palette: false)
    @class = class_string('gate',
                          'bloch-display',
                          'draggable',
                          ['draggable--palette', 'draggable--circuit'] => palette)
    @data = data
  end

  private

  def data
    data_action = (data_action_draggable + ['blochDisplayUpdated->bloch-display#updatePopup']).join(' ')
    { bloch_display_d: 0, controller: 'bloch-display', action: data_action }
  end

  def data_action_draggable
    ['mouseenter->gate-description#initPopup:passive',
     'mousedown->editor#grabDraggable:passive',
     'mouseup->editor#releaseDraggable:passive',
     'click->editor#ignoreDraggableClick:passive']
  end
end
