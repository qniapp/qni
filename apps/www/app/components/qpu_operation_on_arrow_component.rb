# frozen_string_literal: true

class QpuOperationOnArrowComponent < ViewComponent::Base
  include IconHelper

  OPERATION_TAGS = {
    'h' => 'h-gate',
    'x' => 'x-gate',
    'y' => 'y-gate',
    'z' => 'z-gate',
    'phase' => 'phase-gate',
    's' => 's-gate',
    's-dagger' => 's-dagger-gate',
    't' => 't-gate',
    't-dagger' => 't-dagger-gate',
    'rnot' => 'rnot-gate',
    'rx' => 'rx-gate',
    'ry' => 'ry-gate',
    'rz' => 'rz-gate',
    'write' => 'write-gate'
  }.freeze

  def initialize(operation:, angle: nil, value: nil)
    @operation = operation.to_s.downcase
    @angle = angle
    @value = value

    validate_operation
  end

  def call
    content_tag(:div, class: 'flex flex-row items-center') do
      safe_join([
        icon(:arrow_start, class: 'w-3 h-6 text-zinc-200'),
        render_operation_tag,
        icon(:arrow_end, class: 'w-3 h-6 text-zinc-200')
      ])
    end
  end

  private

  def render_operation_tag
    attrs = { class: 'qpu-operation-sm' }
    attrs[:data] = { angle: @angle } if @angle
    attrs[:data] = { value: @value } if @value

    content_tag(operation_tag_name, nil, attrs)
  end

  def operation_tag_name
    OPERATION_TAGS.fetch(@operation)
  end

  def validate_operation
    return if OPERATION_TAGS.key?(@operation)

    raise "Unknown QPU operation: #{@operation}"
  end
end
