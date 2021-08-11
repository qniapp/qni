class ControlGateComponent < ViewComponent::Base
  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  # rubocop:disable Metrics/ParameterLists
  def initialize(disabled: false,
                 wire_top: false,
                 wire_bottom: false,
                 wire_top_disabled: false,
                 wire_bottom_disabled: false,
                 bit: nil,
                 targets: [],
                 controls: [],
                 palette: false)
    @bit = bit
    @targets = targets
    @controls = controls

    @class = class_string('gate',
                          'control-gate',
                          'draggable',
                          ['draggable--palette', 'draggable--circuit'] => palette)

    @data = { draggable: '' }
    @data = @data.merge(disabled ? { disabled: '' } : {})
    @data = @data.merge(wire_top || connected_with_lower_bit? ? { wire_top: '' } : {})
    @data = @data.merge(wire_bottom || connected_with_upper_bit? ? { wire_bottom: '' } : {})
    @data = @data.merge(wire_top_disabled ? { wire_top_disabled: '' } : {})
    @data = @data.merge(wire_bottom_disabled ? { wire_bottom_disabled: '' } : {})

    @data = @data.merge(targets.length.positive? ? { targets: targets.join(',') } : {})
    @data = @data.merge(controls.length.positive? ? { controls: controls.join(',') } : {})
    @data = @data.merge(data_draggable_action)
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength
  # rubocop:enable Metrics/ParameterLists

  private

  def data_draggable_action
    { action: 'mouseenter->gate-description#initPopup:passive ' \
              'mousedown->editor#grabDraggable:passive ' \
              'mouseup->editor#releaseDraggable:passive ' \
              'click->editor#ignoreDraggableClick:passive' }
  end

  def connected_with_upper_bit?
    return false unless @bit

    (@targets + @controls).any? { |each| each > @bit }
  end

  def connected_with_lower_bit?
    return false unless @bit

    (@targets + @controls).any? { |each| each < @bit }
  end
end
