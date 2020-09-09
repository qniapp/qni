require 'component'

# A partial of the qubit readout and write operation.
#
#   # Write 0
#   component 'rw', type: :write, value: 0
#
#   # Add a label on top of the write (default - nil)
#   component 'rw', type: :write, value: 1, label: 'write 1'
#
#   # Readout 0
#   component 'rw', type: :readout, value: 0
#
#   # Add a label on top of the readout (default - nil)
#   component 'rw', type: :readout, value: 1, label: 'readout 1'
class RwComponent < Component
  attribute :type
  attribute :value
  attribute :set

  validates :type, presence: true
  validates :type, inclusion: { in: %i[readout write] }
  validates :value, inclusion: { in: [0, 1] }, if: :value
end
