# frozen_string_literal: true

module Jekyll
  class QpuOperationTag < Liquid::Tag
    def initialize(tag_name, op_type, tokens)
      super
      @op_type = op_type.strip
    end

    # rubocop:disable Layout/LineLength
    def render(_context)
      case @op_type
      when 'h', 'x', 'y', 'z', 'phase', 'measurement', 'control', 'swap'
        "<#{tag_name} class=\"qpu-operation-xs relative top-0.5 inline-block\"></#{tag_name}>"
      when '0', '1'
        "<#{tag_name} data-value=\"#{@op_type}\" class=\"qpu-operation-xs relative top-0.5 inline-block\"></#{tag_name}>"
      else
        raise "Unknown operation type: #{@op_type}"
      end
    end
    # rubocop:enable Layout/LineLength

    def tag_name
      case @op_type
      when 'h', 'x', 'y', 'z', 'phase', 'measurement', 'control', 'swap'
        "#{@op_type}-gate"
      when '0', '1'
        'write-gate'
      else
        raise "Unknown operation type: #{@op_type}"
      end
    end
  end
end

Liquid::Template.register_tag('qpu_operation', Jekyll::QpuOperationTag)
