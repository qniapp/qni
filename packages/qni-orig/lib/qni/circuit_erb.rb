module Qni
  # rubocop:disable Metrics/ModuleLength
  module CircuitErb
    def circuit_block_divider(&block)
      erb = @dsl.block? ? "<%= circuit_block_divider do %>\n" : ''
      erb += block.yield
      erb += "<% end %>\n" if @dsl.block?
      erb
    end

    def circuit_step(&block)
      <<~ERB
        <%= component 'circuit/step' do %>
          #{block.yield}
        <% end %>
      ERB
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

    # rubocop:disable Metrics/MethodLength
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
      if opts.empty?
        "<%= wire %>\n"
      else
        "<%= wire #{opts} %>\n"
      end
    end
    # rubocop:enable Metrics/MethodLength

    def hadamard_gate(opts = {})
      opts_h = %i[disabled if].each_with_object({}) do |each, h|
        case each
        when :disabled
          h[:disabled] = opts[:disabled] if opts[:disabled]
        when :if
          h[:if] = opts[:if] if opts[:if]
        end
      end
      opts = opts_h.map { |k, v| v.is_a?(String) ? "#{k}: '#{v}'" : "#{k}: #{v}" }.join(', ')
      if opts.empty?
        "<%= component 'hadamard_gate' %>\n"
      else
        "<%= component 'hadamard_gate', #{opts} %>\n"
      end
    end

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/CyclomaticComplexity
    # rubocop:disable Metrics/PerceivedComplexity
    # rubocop:disable Metrics/AbcSize
    def not_gate(opts = {})
      opts_h = %i[controls active top bottom if].each_with_object({}) do |each, h|
        case each
        when :controls
          h[:controls] = opts[:controls] unless opts.fetch(:controls, []).empty?
        when :top
          h[:top] = true if opts[:top]
        when :bottom
          h[:bottom] = true if opts[:bottom]
        when :if
          h[:if] = opts[:if] if opts[:if]
        end
      end

      opts = opts_h.map do |k, v|
        case v
        when String
          "#{k}: '#{v}'"
        else
          "#{k}: #{v}"
        end
      end.join(', ')
      if opts.empty?
        "<%= component 'not_gate' %>\n"
      else
        "<%= component 'not_gate', #{opts} %>\n"
      end
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/CyclomaticComplexity
    # rubocop:enable Metrics/PerceivedComplexity
    # rubocop:enable Metrics/AbcSize

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
      "<%= component 'phase_gate', #{opts} %>\n"
    end
    # rubocop:enable Metrics/CyclomaticComplexity

    def control_dot(targets:, top: false, bottom: false, wire_active: true)
      opts_h = %i[targets top bottom wire_active].each_with_object({}) do |each, h|
        case each
        when :targets
          h[:targets] = targets
        when :top
          h[:top] = true if top
        when :bottom
          h[:bottom] = true if bottom
        when :wire_active
          h[:wire_active] = wire_active unless wire_active
        end
      end

      opts = opts_h.map { |k, v| "#{k}: #{v}" }.join(', ')
      "<%= component 'control_dot', #{opts} %>\n"
    end

    def readout(set:)
      if set
        "<%= component 'rw', type: :readout, set: '#{set}' %>\n"
      else
        "<%= component 'rw', type: :readout %>\n"
      end
    end
  end
  # rubocop:enable Metrics/ModuleLength
end
