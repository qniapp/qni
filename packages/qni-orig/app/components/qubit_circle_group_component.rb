require 'component'

class QubitCircleGroupComponent < Component
  attribute :size

  validates :size, numericality: { only_integer: true, greater_than_or_equal_to: 8, less_than: 65 }
  validate :validate_size

  private

  def validate_size
    unless size
      errors.add :size, :invalid
      return
    end

    errors.add :size, :invalid if size % 8 != 0
  end
end
