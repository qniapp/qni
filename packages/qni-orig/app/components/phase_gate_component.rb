require 'component'
require 'concerns/connectable'
require 'concerns/controllable'
require 'concerns/draggable'
require 'concerns/popuppable'
require 'concerns/targetable'
require 'concerns/wireable'

class PhaseGateComponent < Component
  include Connectable
  include Controllable
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

  # rubocop:disable Metrics/AbcSize
  def data
    h = if targets.empty?
          if phi
            { phi: phi.gsub('π', 'pi'), 'gate-label': phi }
          else
            {}
          end
        elsif phi
          { phi: phi.gsub('π', 'pi'), 'gate-label': phi, targets: targets.join(',') }
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

  def popup_type
    :phi
  end
end
