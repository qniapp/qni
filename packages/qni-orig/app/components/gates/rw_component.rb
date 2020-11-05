require 'component'

class Gates::RwComponent < Component
  attribute :type
  attribute :value
  attribute :set

  validates :type, presence: true
  validates :type, inclusion: { in: %i[readout write] }
  validates :value, inclusion: { in: [0, 1] }, if: :value

  def readout?
    type == :readout
  end

  def data
    if readout?
      { value: value, set: set, controller: 'gate-popup' }
    else
      { value: value }
    end
  end
end
