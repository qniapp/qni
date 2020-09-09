require 'component'

# A partial of the control dot gate.
#
#   # Add a label on top of the gate (default - nil)
#   component('control_dot_gate', targets: [1], label: 'controlled')
#
#   # Activate the wire (default - true)
#   component('control_dot_gate', targets: [1], wire_active: false)
#
#   # Connect with upper gate (default - false)
#   component('control_dot_gate', targets: [1], top: true)
#
#   # Connect with lower gate (default - false)
#   component('control_dot_gate', targets: [1], bottom: true)
class ControlDotComponent < Component
  attribute :targets
  attribute :top, default: false
  attribute :bottom, default: false
  attribute :label
  attribute :wire_active, default: true

  validates :targets, presence: true
  validates :top, inclusion: { in: [true, false] }
  validates :bottom, inclusion: { in: [true, false] }
  validates :wire_active, inclusion: { in: [true, false] }

  def top?
    top
  end

  def bottom?
    bottom
  end

  def wire_active?
    wire_active
  end
end
