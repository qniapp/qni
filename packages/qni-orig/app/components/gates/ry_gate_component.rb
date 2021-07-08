require 'component'
require 'concerns/connectable'
require 'concerns/controllable'
require 'concerns/draggable'
require 'concerns/popuppable'
require 'concerns/targetable'
require 'concerns/wireable'

class Gates::RyGateComponent < Component
  include Connectable
  include Controllable
  include Draggable
  include Popuppable
  include Targetable
  include Wireable

  attribute :theta

  def klass
    class_string('gate',
                 'gate--thetable',
                 'ry-gate',
                 'draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?,
                 'connectable--upper-bit' => connected_with_upper_bit?,
                 'connectable--lower-bit' => connected_with_lower_bit?,
                 'instruction--wire-inactive' => !wire_active?)
  end

  # rubocop:disable Metrics/AbcSize
  def data
    h = if targets.empty?
          if theta
            { theta: theta_pi, 'gate-label': theta }
          else
            {}
          end
        elsif theta
          { theta: theta_pi, 'gate-label': theta, targets: targets.join(',') }
        else
          { targets: targets.join(',') }
        end
    h.merge(controls.empty? ? {} : { controls: controls.join(',') })
     .merge(data_popup)
     .merge(data_draggable)
  end
  # rubocop:enable Metrics/AbcSize

  def connected_with_upper_bit?
    return false unless bit

    (controls + targets).any? { |each| each > bit }
  end

  def connected_with_lower_bit?
    return false unless bit

    (controls + targets).any? { |each| each < bit }
  end

  private

  def theta_pi
    theta.gsub 'π', 'pi'
  end

  def popup_type
    :theta
  end
end
