# frozen_string_literal: true

class GatePopupComponent < ViewComponent::Base
  include GatePopupHelper
  include IconHelper

  def initialize(type:, label:, error_message:)
    @type = type
    @label = label
    @error_message = error_message
  end
end
