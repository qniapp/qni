require 'component'

# A partial of the phase gate.
#
#   # Specify θ
#   component('phase_gate', theta: 'π/2')
#
#   # Disable the gate (default - false)
#   component('phase_gate', theta: 'π/2', disabled: true)
#
#   # Activate the wire (default - true)
#   component('phase_gate', theta: 'π/2', wire_active: false)
#
#   # Connect with upper gate (default - false)
#   component('phase_gate', theta: 'π/2', top: true)
#
#   # Connect with lower gate (default - false)
#   component('phase_gate', theta: 'π/2', bottom: true)
class PhaseGateComponent < Component
  attribute :theta
  attribute :top, default: false
  attribute :bottom, default: false
  attribute :disabled, default: false
  attribute :wire_active, default: true

  validates :theta, presence: true

  def disabled?
    disabled
  end

  def wire_active?
    wire_active
  end
end
