require 'component'

# A partial of the hadamard gate.
#
#   # Add a label on top of the gate (default - nil)
#   component 'hadamard_gate', label: 'if alice_h'
#
#   # Disable the gate (default - false)
#   component 'hadamard_gate', disabled: true
#
#   # Activate the wire (default - true)
#   component 'hadamard_gate', wire_active: false
class HadamardGateComponent < Component
  attribute :disabled, default: false
  attribute :wire_active, default: true
  attribute :if

  validates :disabled, inclusion: { in: [true, false] }
  validates :wire_active, inclusion: { in: [true, false] }

  def disabled?
    disabled
  end

  def wire_active?
    wire_active
  end
end
