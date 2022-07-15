# frozen_string_literal: true

class QubitTransitionComponent < ViewComponent::Base
  def initialize(from:, to:, operation:, angle: nil, value: nil, dark_mode: false)
    @from = from
    @to = to
    @operation = operation
    @angle = angle
    @value = value
    @dark_mode = dark_mode
  end
end
