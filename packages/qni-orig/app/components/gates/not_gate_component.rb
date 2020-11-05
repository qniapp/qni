require 'component'
require 'concerns/connectable'
require 'concerns/controllable'
require 'concerns/ifable'
require 'concerns/wireable'

class Gates::NotGateComponent < Component
  include Connectable
  include Controllable
  include Ifable
  include Wireable

  def klass
    class_string('instruction',
                 'instruction--ifable',
                 'gate',
                 'not-gate',
                 'gate--connected-with-upper-bit' => with_upper_bit?,
                 'gate--connected-with-lower-bit' => with_lower_bit?,
                 'instruction--wire-inactive' => !wire_active?,
                 'gate--disabled' => disabled?)
  end

  def data
    (controls.empty? ? {} : { controls: controls.join(',') })
      .merge({ if: self.if, controller: 'gate-popup' })
  end

  def label_text
    self.if ? "if #{self.if}" : nil
  end

  private

  def with_upper_bit?
    return false unless bit

    controls.any? { |each| each > bit }
  end

  def with_lower_bit?
    return false unless bit

    controls.any? { |each| each < bit }
  end
end
