# frozen_string_literal: true

class MeasureGateComponent < ViewComponent::Base
  VARIABLE_NAME_REGEXP = /[[:lower:]][_[:alnum:]]*/.freeze

  def initialize(value: nil, flag: nil, draggable: false, palette: false)
    raise ArgumentError if value && [0, 1].exclude?(value)
    raise ArgumentError if flag && !VARIABLE_NAME_REGEXP.match?(flag)

    @flag = flag
    @class = class_string('gate',
                          'measure-gate',
                          'draggable',
                          ['draggable--palette', 'draggable--circuit'] => palette)
    @data = { draggable: draggable ? '' : nil, value: value, flag: flag, 'gate-label': flag }
    @data = @data.merge(data_draggable_action) if draggable
  end

  private

  def data_draggable_action
    { action: 'mousedown->editor#grabDraggableOld:passive ' \
              'mouseup->editor#releaseDraggable:passive ' \
              'click->editor#ignoreDraggableClick:passive' }
  end
end
