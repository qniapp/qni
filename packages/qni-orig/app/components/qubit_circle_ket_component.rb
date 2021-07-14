require 'component'

class QubitCircleKetComponent < Component
  attribute :value

  validates :value, inclusion: { in: [0, 1] }
end
