module Wireable
  extend ActiveSupport::Concern

  included do
    attribute :wire_active, default: true

    validates :wire_active, inclusion: { in: [true, false] }
  end

  def wire_active?
    wire_active
  end
end
