module Ifable
  extend ActiveSupport::Concern

  included do
    attribute :if

    validate :validate_if
  end

  private

  def validate_if
    errors.add :if, :invalid if self.if && !(self.if.is_a?(String) || self.if.is_a?(Symbol))
  end
end
