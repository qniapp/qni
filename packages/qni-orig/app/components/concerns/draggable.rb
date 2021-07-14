module Draggable
  extend ActiveSupport::Concern

  included do
    attribute :palette, default: false

    validates :palette, inclusion: { in: [true, false] }
  end

  private

  def on_palette?
    palette
  end

  # TODO: remove
  def palette?
    palette
  end

  def on_circuit?
    !on_palette?
  end

  # TODO: remove
  def circuit?
    !on_palette?
  end

  def data_draggable
    { action: 'mouseenter->gate-description#initPopup:passive ' \
              'mousedown->editor#grabDraggable:passive ' \
              'mouseup->editor#releaseDraggable:passive ' \
              'click->editor#ignoreDraggableClick:passive' }
  end
end
