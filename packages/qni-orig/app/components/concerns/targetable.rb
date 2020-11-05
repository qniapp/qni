module Targetable
  extend ActiveSupport::Concern

  included do
    attribute :targets, default: []

    validate :validate_targets
  end

  private

  def validate_targets
    case targets
    when Integer
      errors.add :targets, :invalid if targets.negative?
    when Array
      errors.add :targets, :invalid if !targets.all?(Integer) || targets.any?(&:negative?)
    else
      errors.add :targets, :invalid
    end
  end
end
