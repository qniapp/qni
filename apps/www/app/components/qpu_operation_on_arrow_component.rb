# frozen_string_literal: true

class QpuOperationOnArrowComponent < ViewComponent::Base
  include IconHelper

  def initialize(operation:, angle: nil, value: nil)
    @operation = operation
    @angle = angle
    @value = value

    validate_operation
    @operation_tag = "#{@operation.to_s.downcase}-gate"
  end

  private

  def validate_operation
    return if %w[h x y z phase s t t-dagger rnot rx ry rz write].include?(@operation.to_s.downcase)

    raise "Unknown QPU operation: #{@operation}"
  end
end
