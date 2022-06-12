# frozen_string_literal: true

class GateCarouselComponent < ViewComponent::Base
  def initialize(id: 'gate-carousel', current_gate_set_index: 0)
    @id = id
    @current_gate_set_index = current_gate_set_index
  end
end
