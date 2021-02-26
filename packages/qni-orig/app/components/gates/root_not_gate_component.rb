require 'component'
require 'concerns/wireable'

class Gates::RootNotGateComponent < Component
  include Ifable
  include Wireable

  def klass
    class_string('gate', 'gate--ifable',
                 'root-not-gate',
                 'instruction--wire-inactive' => !wire_active?)
  end

  def data
    { if: self.if, controller: 'gate-popup' }
  end

  def label_text
    self.if ? "if #{self.if}" : nil
  end
end
