# frozen_string_literal: true

class MeasureGateComponent < ViewComponent::Base
  VARIABLE_NAME_REGEXP = /[[:lower:]][_[:alnum:]]*/.freeze

  def initialize(value: nil, flag: nil, palette: false)
    raise ArgumentError if value && [0, 1].exclude?(value)
    raise ArgumentError if flag && !VARIABLE_NAME_REGEXP.match?(flag)

    @flag = flag
    @class = class_string('gate',
                          'measure-gate',
                          'draggable',
                          ['draggable--palette', 'draggable--circuit'] => palette)
    @data = { value: value, flag: flag, 'gate-label': flag }.merge(data_draggable)
  end

  private

  def data_draggable
    { action: 'mouseenter->gate-description#initPopup:passive ' \
              'mousedown->editor#grabDraggable:passive ' \
              'mouseup->editor#releaseDraggable:passive ' \
              'click->editor#ignoreDraggableClick:passive' }
  end
end
