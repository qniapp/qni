# frozen_string_literal: true

class ColoredPhaseIconComponent < ViewComponent::Base
  def initialize(size:)
    @rem = "#{0.25 * size}rem"
  end
end
