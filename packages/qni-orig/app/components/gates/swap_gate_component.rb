require 'component'
require 'concerns/connectable'
require 'concerns/controllable'
require 'concerns/draggable'
require 'concerns/targetable'
require 'concerns/wireable'

class Gates::SwapGateComponent < Component
  include Connectable
  include Controllable
  include Draggable
  include Targetable
  include Wireable

  attribute :disabled, default: false
  validates :disabled, inclusion: { in: [true, false] }

  def klass
    class_string('gate',
                 'swap-gate',
                 'draggable',
                 'gate--disabled' => disabled,
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?,
                 'connectable--upper-bit' => connected_with_upper_bit?,
                 'connectable--lower-bit' => connected_with_lower_bit?,
                 'instruction--wire-inactive' => !wire_active?)
  end

  # rubocop:disable Metrics/AbcSize
  def data
    data_base = if !targets.empty? && !controls.empty?
                  { targets: targets.join(','), controls: controls.join(',') }
                elsif !targets.empty? && controls.empty?
                  { targets: targets.join(',') }
                elsif targets.empty? && !controls.empty?
                  { controls: controls.join(',') }
                end
    (data_base || {}).merge(data_draggable)
  end
  # rubocop:enable Metrics/AbcSize

  def connected_with_upper_bit?
    return false unless bit

    (targets + controls).any? { |each| each > bit }
  end

  def connected_with_lower_bit?
    return false unless bit

    (targets + controls).any? { |each| each < bit }
  end
end
