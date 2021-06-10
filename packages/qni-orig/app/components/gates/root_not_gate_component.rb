require 'component'
require 'concerns/popuppable'
require 'concerns/wireable'

class Gates::RootNotGateComponent < Component
  include Ifable
  include Popuppable
  include Wireable

  def klass
    class_string('gate', 'gate--ifable',
                 'root-not-gate',
                 'instruction--wire-inactive' => !wire_active?)
  end

  def data
    { if: self.if,
      'gate-label': label_text,
      'gate-popup-target': popup && 'gate',
      'gate-popup-type': 'if' }
  end

  def label_text
    self.if ? "if #{self.if}" : nil
  end
end
