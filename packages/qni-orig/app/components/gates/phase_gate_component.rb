require 'component'
require 'concerns/connectable'
require 'concerns/draggable'
require 'concerns/popuppable'
require 'concerns/targetable'
require 'concerns/wireable'

class Gates::PhaseGateComponent < Component
  include Connectable
  include Draggable
  include Popuppable
  include Targetable
  include Wireable

  attribute :phi

  def klass
    class_string('gate',
                 'gate--phiable',
                 'phase-gate',
                 'draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?,
                 'connectable--upper-bit' => connected_with_upper_bit?,
                 'connectable--lower-bit' => connected_with_lower_bit?,
                 'instruction--wire-inactive' => !wire_active?)
  end

  def data
    h = if targets.empty?
          if phi
            { phi: phi_pi, 'gate-label': phi }
          else
            {}
          end
        elsif phi
          { phi: phi_pi, 'gate-label': phi, targets: targets.join(',') }
        else
          { targets: targets.join(',') }
        end
    h.merge(data_popup).merge(data_draggable)
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

  def phi_pi
    phi.gsub 'π', 'pi'
  end

  def popup_type
    :phi
  end
end
