module Controllable
  extend ActiveSupport::Concern

  included do
    attribute :controls, default: []

    validate :validate_controls
  end

  private

  def validate_controls
    errors.add :controls, :invalid if !controls.is_a?(Array) || !controls.all?(Integer) || controls.any?(&:negative?)
  end
end
