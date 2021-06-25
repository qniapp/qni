module Connectable
  extend ActiveSupport::Concern

  included do
    attribute :bit
    attribute :wire_top, default: false
    attribute :wire_bottom, default: false

    validates :bit,
              numericality: { only_integer: true, allow_nil: true, greater_than_or_equal_to: 0,
                              less_than_or_equal_to: Qni::MAX_NQUBIT }
    validates :wire_top, inclusion: { in: [true, false] }
    validates :wire_bottom, inclusion: { in: [true, false] }
  end

  def wire_top?
    wire_top
  end

  def wire_bottom?
    wire_bottom
  end
end
