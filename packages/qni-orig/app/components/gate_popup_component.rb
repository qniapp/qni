# frozen_string_literal: true

require 'component'

class GatePopupComponent < Component
  attribute :type
  attribute :label
  attribute :error_message

  validates :type, presence: true
  validates :label, presence: true
  validates :error_message, presence: true
end
