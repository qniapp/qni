# frozen_string_literal: true

class MeasurementGateComponent < ViewComponent::Base
  VARIABLE_NAME_REGEXP = /[[:lower:]][_[:alnum:]]*/.freeze

  def initialize(value: nil, flag: nil, draggable: false, palette: false)
    raise ArgumentError if value && [0, 1].exclude?(value)
    raise ArgumentError if flag && !VARIABLE_NAME_REGEXP.match?(flag)

    @value = value
    @flag = flag
    @draggable = draggable
    @class = class_string('gate',
                          'measure-gate',
                          'draggable',
                          ['draggable--palette', 'draggable--circuit'] => palette)
  end
end
