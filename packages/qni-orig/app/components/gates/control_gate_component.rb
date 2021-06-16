require 'component'
require 'concerns/connectable'
require 'concerns/controllable'
require 'concerns/draggable'
require 'concerns/targetable'
require 'concerns/wireable'

class Gates::ControlGateComponent < Component
  include Connectable
  include Controllable
  include Draggable
  include Targetable
  include Wireable

  def klass
    class_string('gate',
                 'control-gate',
                 'draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?,
                 'instruction--wire-inactive' => !wire_active?,
                 'connectable--upper-bit' => connected_with_upper_bit?,
                 'connectable--lower-bit' => connected_with_lower_bit?)
  end

  # rubocop:disable Metrics/AbcSize
  def data
    data_base =
      if !targets.empty? && !controls.empty?
        { targets: targets.join(','), controls: controls.join(',') }
      elsif !targets.empty? && controls.empty?
        { targets: targets.join(',') }
      elsif targets.empty? && !controls.empty?
        { controls: controls.join(',') }
      else
        {}
      end
    data_base.merge(data_draggable)
  end
  # rubocop:enable Metrics/AbcSize

  private

  def connected_with_upper_bit?
    return false unless bit

    (targets + controls).any? { |each| each > bit }
  end

  def connected_with_lower_bit?
    return false unless bit

    (targets + controls).any? { |each| each < bit }
  end
end
