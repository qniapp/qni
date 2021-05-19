require 'component'
require 'concerns/connectable'
require 'concerns/targetable'
require 'concerns/wireable'

class Gates::PhaseGateComponent < Component
  include Connectable
  include Targetable
  include Wireable

  attribute :theta

  def klass
    class_string('gate', 'gate--thetable',
                 'phase-gate',
                 'gate--connected-with-upper-bit' => connected_with_upper_bit?,
                 'gate--connected-with-lower-bit' => connected_with_lower_bit?,
                 'instruction--wire-inactive' => !wire_active?)
  end

  def data
    h = if targets.empty?
          if theta
            { theta: theta_pi }
          else
            {}
          end
        elsif theta
          { theta: theta_pi, targets: targets.join(',') }
        else
          { targets: targets.join(',') }
        end
    h.merge({ controller: 'gate-popup' })
  end

  def connected_with_upper_bit?
    return false unless bit

    targets.any? { |each| each > bit }
  end

  def connected_with_lower_bit?
    return false unless bit

    targets.any? { |each| each < bit }
  end

  private

  def theta_pi
    theta.gsub 'π', 'pi'
  end
end
