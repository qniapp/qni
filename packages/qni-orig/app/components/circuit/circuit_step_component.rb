require 'component'

class Circuit::CircuitStepComponent < Component
  attribute :shadow, default: false
  attribute :shadow_source, default: false

  validates :shadow, inclusion: { in: [true, false] }
  validates :shadow_source, inclusion: { in: [true, false] }

  def shadow?
    shadow
  end

  def shadow_source?
    shadow_source
  end
end
