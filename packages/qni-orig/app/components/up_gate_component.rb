require 'component'

# A partial of wire connected to the lower qubit.
#
#   # Add a controlled wire (default - false)
#   component 'up_gate', bottom: true
class UpGateComponent < Component
  attribute :bottom, default: false

  validates :bottom, inclusion: { in: [true, false] }

  def bottom?
    bottom
  end
end
