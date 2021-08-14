# frozen_string_literal: true

class BlochDisplayComponent < ViewComponent::Base
  def initialize(draggable: true, palette: false)
    @class = class_string('gate',
                          'bloch-display',
                          'draggable',
                          ['draggable--palette', 'draggable--circuit'] => palette)
    @draggable = draggable
  end
end
