module Controllable
  extend ActiveSupport::Concern

  included do
    attribute :controls, default: []

    validate :validate_controls
  end

  private

  # rubocop:disable Metrics/AbcSize
  def validate_controls
    case controls
    when Integer
      errors.add :controls, :invalid if controls.negative? || controls > Qni::MAX_NQUBIT
    when Array
      errors.add :controls, :invalid if !controls.all?(Integer) || controls.any?(&:negative?) || controls.any? do |each|
                                          each > Qni::MAX_NQUBIT
                                        end
    else
      errors.add :controls, :invalid
    end
  end
  # rubocop:enable Metrics/AbcSize

  def data_controls
    [controls].flatten.empty? ? {} : { controls: [controls].flatten.sort.join(',') }
  end
end
