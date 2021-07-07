module Disableable
  extend ActiveSupport::Concern

  included do
    attribute :disabled, default: false

    validates :disabled, inclusion: { in: [true, false] }
  end

  def disabled?
    disabled
  end
end
