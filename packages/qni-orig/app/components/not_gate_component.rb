require 'component'

# A partial of the not gate.
#
#   # Add a label on top of the gate (default - nil)
#   component('not_gate', label: 'if alice_h')
#
#   # Disable the gate (default - false)
#   component('not_gate', disabled: true)
#
#   # Activate the wire (default - true)
#   component('not_gate', wire_active: false)
#
#   # Connect with upper gate (default - false)
#   component('not_gate', top: true)
#
#   # Connect with lower gate (default - false)
#   component('not_gate', bottom: true)
class NotGateComponent < Component
  attribute :controls, default: []
  attribute :top, default: false
  attribute :bottom, default: false
  attribute :disabled, default: false
  attribute :wire_active, default: true
  attribute :if

  validates :top, inclusion: { in: [true, false] }
  validates :bottom, inclusion: { in: [true, false] }
  validates :disabled, inclusion: { in: [true, false] }
  validates :wire_active, inclusion: { in: [true, false] }

  def top?
    top
  end

  def bottom?
    bottom
  end

  def disabled?
    disabled
  end

  def wire_active?
    wire_active
  end
end
