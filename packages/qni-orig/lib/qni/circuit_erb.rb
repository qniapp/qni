module Qni
  module CircuitErb
    def circuit_block_divider(&block)
      erb = @dsl.block? ? "<%= circuit_block_divider do %>\n" : ''
      erb += block.yield
      erb += "<% end %>\n" if @dsl.block?
      erb
    end

    def circuit_column(&block)
      erb = "<%= circuit_column do %>\n"
      erb += block.yield
      erb + "<% end %>\n"
    end

    def block_divider(&block)
      erb = block_divider? ? "<%= circuit_block_divider do %>\n" : ''
      erb += block.yield
      erb += "<% end %>\n" if block_divider?
      erb
    end

    def block_divider?
      @dsl.block? && !@in_block
    end

    def wire(active: true, top: false, bottom: false)
      opts_h = %i[active top bottom].each_with_object({}) do |each, h|
        case each
        when :active
          h[:active] = false unless active
        when :top
          h[:top] = true if top
        when :bottom
          h[:bottom] = true if bottom
        end
      end
      opts = opts_h.map { |k, v| "#{k}: #{v}" }.join(', ')
      "<%= wire #{opts.empty? ? '' : opts + ' '}%>\n"
    end

    def hadamard_gate(disabled:, label:)
      opts_h = %i[disabled label].each_with_object({}) do |each, h|
        case each
        when :disabled
          h[:disabled] = disabled if disabled
        when :label
          h[:label] = label if label
        end
      end
      opts = opts_h.map { |k, v| v.is_a?(String) ? "#{k}: '#{v}'" : "#{k}: #{v}" }.join(', ')
      "<%= hadamard_gate #{opts.empty? ? '' : opts + ' '}%>\n"
    end

    def not_gate(top: false, bottom: false, label: nil)
      opts_h = %i[active top bottom].each_with_object({}) do |each, h|
        case each
        when :top
          h[:top] = true if top
        when :bottom
          h[:bottom] = true if bottom
        when :label
          h[:label] = label if label
        end
      end
      opts = opts_h.map { |k, v| "#{k}: #{v}" }.join(', ')
      "<%= not_gate #{opts.empty? ? '' : opts + ' '}%>\n"
    end

    # rubocop:disable Metrics/CyclomaticComplexity
    def phase_gate(theta:, top: false, bottom: false, wire_active: true)
      opts_h = %i[theta top bottom wire_active].each_with_object({}) do |each, h|
        case each
        when :theta
          h[:theta] = theta
        when :top
          h[:top] = true if top
        when :bottom
          h[:bottom] = true if bottom
        when :wire_active
          h[:wire_active] = wire_active unless wire_active
        end
      end
      opts = opts_h.map { |k, v| v.is_a?(String) ? "#{k}: '#{v}'" : "#{k}: #{v}" }.join(', ')
      "<%= phase_gate #{opts.empty? ? '' : opts + ' '}%>\n"
    end
    # rubocop:enable Metrics/CyclomaticComplexity

    def control_dot(top: false, bottom: false, wire_active: true)
      opts_h = %i[top bottom wire_active].each_with_object({}) do |each, h|
        case each
        when :top
          h[:top] = true if top
        when :bottom
          h[:bottom] = true if bottom
        when :wire_active
          h[:wire_active] = wire_active unless wire_active
        end
      end
      opts = opts_h.map { |k, v| "#{k}: #{v}" }.join(', ')
      "<%= control_dot #{opts.empty? ? '' : opts + ' '}%>\n"
    end

    def readout(value:, label:)
      if label
        "<%= readout value: #{value}, label: '#{label}' %>\n"
      else
        "<%= readout value: #{value} %>\n"
      end
    end
  end
end
