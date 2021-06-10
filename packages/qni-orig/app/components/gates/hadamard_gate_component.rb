require 'component'
require 'concerns/ifable'
require 'concerns/popuppable'
require 'concerns/wireable'

class Gates::HadamardGateComponent < Component
  include Ifable
  include Popuppable
  include Wireable

  def klass
    class_string('gate', 'gate--ifable',
                 'hadamard-gate',
                 'instruction--wire-inactive' => !wire_active?,
                 'gate--disabled' => disabled?)
  end

  def data
    { if: self.if, 'gate-label': label_text, 'gate-popup-type': 'if' }.merge(data_popup)
  end

  def label_text
    self.if ? "if #{self.if}" : nil
  end

  private

  def popup_type
    :if
  end
end
