# frozen_string_literal: true

class QubitCircleComponent < ViewComponent::Base
  def initialize(ket:, amplitude:, dark_mode:)
    @ket = ket
    @amplitude = amplitude
    @dark_mode = dark_mode
  end
end
