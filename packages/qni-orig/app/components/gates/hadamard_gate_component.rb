require 'component'
require 'concerns/ifable'
require 'concerns/wireable'

class Gates::HadamardGateComponent < Component
  include Ifable
  include Wireable

  def klass
    class_string('instruction',
                 'instruction--ifable',
                 'gate', 'hadamard-gate',
                 'instruction--wire-inactive' => !wire_active?,
                 'gate--disabled' => disabled?)
  end

  def data
    { if: self.if, controller: 'gate-popup' }
  end

  def label_text
    self.if ? "if #{self.if}" : nil
  end
end
