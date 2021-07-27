# frozen_string_literal: true

class QubitCircleComponent < ViewComponent::Base
  def initialize(options = {})
    @magnitude = options.fetch(:magnitude, nil)
    @phase = options.fetch(:phase, nil)
    @id = options.fetch(:id, nil)
    @class = options.fetch(:class, nil)
  end
end
