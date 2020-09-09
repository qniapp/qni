require 'component'

# Returns a partial of the root-not gate.
#
#   # Add a label on top of the gate (default - nil)
#   component('root_not_gate', label: 'root-of-not')
#
#   # Disable the gate (default - false)
#   component('root_not_gate', disabled: true)
#
#   # Activate the wire (default - true)
#   component('root_not_gate', wire_active: false)
#
#   # Connect with upper gate (default - false)
#   component('root_not_gate', top: true)
#
#   # Connect with lower gate (default - false)
#   component('root_not_gate', bottom: true)
class RootNotGateComponent < Component
  attribute :top, default: false
  attribute :bottom, default: false
  attribute :label, default: nil
  attribute :disabled, default: false
  attribute :wire_active, default: true

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
