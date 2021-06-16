require 'component'
require 'concerns/draggable'
require 'concerns/popuppable'
require 'concerns/wireable'

class Gates::RootNotGateComponent < Component
  include Ifable
  include Popuppable
  include Wireable
  include Draggable

  def klass
    class_string('gate',
                 'gate--ifable',
                 'root-not-gate',
                 'draggable',
                 'draggable--palette' => palette?,
                 'draggable--circuit' => circuit?,
                 'instruction--wire-inactive' => !wire_active?)
  end

  def data
    { if: self.if,
      'gate-label': label_text,
      'gate-popup-target': popup && 'gate',
      'gate-popup-type': 'if' }.merge(data_draggable)
  end

  def label_text
    self.if ? "if #{self.if}" : nil
  end
end
