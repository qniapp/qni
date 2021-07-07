module Targetable
  extend ActiveSupport::Concern

  included do
    attribute :targets, default: []

    validate :validate_targets
  end

  private

  # rubocop:disable Metrics/AbcSize
  def validate_targets
    case targets
    when Integer
      errors.add :targets, :invalid if targets.negative? || targets > Qni::MAX_NQUBIT
    when Array
      errors.add :targets, :invalid if !targets.all?(Integer) || targets.any?(&:negative?) || targets.any? do |each|
                                         each > Qni::MAX_NQUBIT
                                       end
    else
      errors.add :targets, :invalid
    end
  end
  # rubocop:enable Metrics/AbcSize
end
