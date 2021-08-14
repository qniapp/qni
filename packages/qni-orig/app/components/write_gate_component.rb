# frozen_string_literal: true

class WriteGateComponent < ViewComponent::Base
  def initialize(value:, palette: false)
    raise ArgumentError if value && [0, 1].exclude?(value)

    @class = class_string('gate',
                          'write-gate',
                          'draggable',
                          ['draggable--palette', 'draggable--circuit'] => palette)
    @data = { value: value }.merge(data_draggable)
  end

  private

  def data_draggable
    { action: 'mouseenter->gate-description#initPopup:passive ' \
              'mousedown->editor#grabDraggableOld:passive ' \
              'mouseup->editor#releaseDraggable:passive ' \
              'click->editor#ignoreDraggableClick:passive' }
  end
end
