module Draggable
  extend ActiveSupport::Concern

  included do
    attribute :palette, default: false

    validates :palette, inclusion: { in: [true, false] }
  end

  private

  def circuit?
    !palette?
  end

  def palette?
    palette
  end

  def data_draggable
    { action: 'mouseover->editor#enableDnd:passive ' \
              'mousedown->editor#grabDraggable:passive ' \
              'mouseup->editor#releaseDraggable:passive ' \
              'click->editor#ignoreDraggableClick:passive' }
  end
end
