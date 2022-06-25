# frozen_string_literal: true

module Jekyll
  class QpuOperationTag < Liquid::Tag
    def initialize(tag_name, op_type, tokens)
      super
      @op_type = op_type.strip
    end

    def render(_context)
      case @op_type
      when 'h', 'x', 'y', 'z', 'phase', 'measurement', 'control'
        "<#{tag_name} class=\"operation-xs relative top-0.5 inline-block\"></#{tag_name}>"
      when '0', '1'
        "<#{tag_name} data-value=\"#{@op_type}\" class=\"operation-xs relative top-0.5 inline-block\"></#{tag_name}>"
      else
        raise "Unknown operation type: #{@op_type}"
      end
    end

    def tag_name
      case @op_type
      when 'h', 'x', 'y', 'z', 'phase', 'measurement', 'control'
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
