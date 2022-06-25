module Jekyll
  class QpuOperationTag < Liquid::Tag
    def initialize(tag_name, op_type, tokens)
      super
      @op_type = op_type.strip
    end

    def render(_context)
      "<#{tag_name} class=\"operation-xs relative top-0.5 inline-block\"></#{tag_name}>"
    end

    def tag_name
      case @op_type
      when 'h'
        'h-gate'
      when 'x'
        'x-gate'
      when 'y'
        'y-gate'
      when 'z'
        'z-gate'
      when 'phase'
        'phase-gate'
      else
        raise "Unknown operation type: #{@op_type}"
      end
    end
  end
end

Liquid::Template.register_tag('qpu_operation', Jekyll::QpuOperationTag)
