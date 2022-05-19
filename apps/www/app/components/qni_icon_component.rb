# frozen_string_literal: true

class QniIconComponent < ViewComponent::Base
  def initialize(size:)
    @rem = "#{0.25 * size}rem"
  end
end
