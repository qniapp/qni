# frozen_string_literal: true

module GateCarouselHelper
  def gate_set(&block)
    render 'gate_carousel_component/gate_set', &block
  end

  def gate_carousel_dropzone(&block)
    render 'gate_carousel_component/dropzone', &block
  end
end
