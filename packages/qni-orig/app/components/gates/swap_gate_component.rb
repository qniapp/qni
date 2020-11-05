require 'component'
require 'concerns/connectable'
require 'concerns/targetable'
require 'concerns/wireable'

class Gates::SwapGateComponent < Component
  include Connectable
  include Targetable
  include Wireable

  def klass
    class_string('instruction',
                 'gate',
                 'swap-gate',
                 'gate--connected-with-upper-bit' => connected_with_upper_bit?,
                 'gate--connected-with-lower-bit' => connected_with_lower_bit?,
                 'instruction--wire-inactive' => !wire_active?)
  end

  def data
    { targets: targets.join(',') }
  end

  def connected_with_upper_bit?
    return false unless bit

    targets.any? { |each| each > bit }
  end

  def connected_with_lower_bit?
    return false unless bit

    targets.any? { |each| each < bit }
  end
end
