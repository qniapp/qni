# frozen_string_literal: true

class ColorPhaseIconComponent < ViewComponent::Base
  def initialize(size:)
    @rem = "#{0.25 * size}rem"
  end
end
