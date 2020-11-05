module Ifable
  extend ActiveSupport::Concern

  included do
    attribute :disabled, default: false
    attribute :if

    validate :validate_if
    validates :disabled, inclusion: { in: [true, false] }
  end

  def disabled?
    disabled
  end

  private

  def validate_if
    errors.add :if, :invalid if self.if && !(self.if.is_a?(String) || self.if.is_a?(Symbol))
  end
end
