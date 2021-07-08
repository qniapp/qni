module Qni
  # rubocop:disable Metrics/ModuleLength
  module CircuitErb
    def circuit_block_divider(&block)
      erb = contains_circuit_block_divider? ? "<%= circuit_block_divider do %>\n" : ''
      erb += block.yield
      erb += "<% end %>\n" if contains_circuit_block_divider?
      erb
    end

    def circuit_step(&block)
      <<~ERB
        <%= circuit_step do %>
          #{block.yield}
        <% end %>
      ERB
    end

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/CyclomaticComplexity
    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/PerceivedComplexity
    # rubocop:disable Metrics/ParameterLists
    def dropzone(wire_top: false, wire_bottom: false,
                 wire_active: true, input_wire_active: true, output_wire_active: true,
                 no_wire: false, &block)
      opts_h = %i[wire_top wire_bottom wire_active input_wire_active output_wire_active
                  no_wire].each_with_object({}) do |each, h|
        case each
        when :wire_top
          h[:wire_top] = true if wire_top
        when :wire_bottom
          h[:wire_bottom] = true if wire_bottom
        when :wire_active
          h[:wire_active] = false unless wire_active
        when :input_wire_active
          h[:input_wire_active] = false unless input_wire_active
        when :output_wire_active
          h[:output_wire_active] = false unless output_wire_active
        when :no_wire
          h[:no_wire] = true if no_wire
        end
      end
      opts = opts_h.map { |k, v| "#{k}: #{v}" }.join(', ')

      if block
        if opts.empty?
          <<~ERB
            <%= dropzone do %>
              #{block.yield}
            <% end %>
          ERB
        else
          <<~ERB
            <%= dropzone #{opts} do %>
              #{block.yield}
            <% end %>
          ERB
        end
      elsif opts.empty?
        "<%= dropzone %>\n"
      else
        "<%= dropzone #{opts} %>\n"
      end
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/CyclomaticComplexity
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/PerceivedComplexity
    # rubocop:enable Metrics/ParameterLists

    def draggable(write: false, measure: false, &block)
      opts = option_string(write: write, measure: measure)
      if opts
        <<~ERB
          <%= draggable #{opts} do %>
            #{block.yield}
          <% end %>
        ERB
      else
        <<~ERB
          <%= draggable do %>
            #{block.yield}
          <% end %>
        ERB
      end
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

    def hadamard_gate(opts = {})
      opts = option_string(bit: opts.fetch(:bit),
                           controls: opts.fetch(:controls, []),
                           targets: opts.fetch(:targets, []),
                           if: opts.fetch(:if, nil))
      "<%= hadamard_gate #{opts} %>\n"
    end

    def not_gate(opts = {})
      opts = option_string(bit: opts.fetch(:bit),
                           controls: opts.fetch(:controls, []),
                           targets: opts.fetch(:targets, []),
                           if: opts.fetch(:if, nil))
      "<%= not_gate #{opts} %>\n"
    end

    def rx_gate(opts = {})
      opts = option_string(bit: opts.fetch(:bit),
                           theta: opts.fetch(:theta),
                           controls: opts.fetch(:controls, []),
                           targets: opts.fetch(:targets, []),
                           if: opts.fetch(:if, nil))
      "<%= rx_gate #{opts} %>\n"
    end

    def ry_gate(opts = {})
      opts = option_string(bit: opts.fetch(:bit),
                           theta: opts.fetch(:theta),
                           controls: opts.fetch(:controls, []),
                           targets: opts.fetch(:targets, []),
                           if: opts.fetch(:if, nil))
      "<%= ry_gate #{opts} %>\n"
    end

    def rz_gate(opts = {})
      opts = option_string(bit: opts.fetch(:bit),
                           theta: opts.fetch(:theta),
                           controls: opts.fetch(:controls, []),
                           targets: opts.fetch(:targets, []),
                           if: opts.fetch(:if, nil))
      "<%= rz_gate #{opts} %>\n"
    end

    def root_not_gate(opts = {})
      opts = option_string(bit: opts.fetch(:bit),
                           controls: opts.fetch(:controls, []),
                           targets: opts.fetch(:targets, []),
                           if: opts.fetch(:if, nil))
      "<%= root_not_gate #{opts} %>\n"
    end

    def phase_gate(bit:, phi:, controls: [], targets: [], wire_active: true)
      opts = option_string(bit: bit, phi: phi, controls: controls, targets: targets, wire_active: wire_active)
      "<%= phase_gate #{opts} %>\n"
    end

    def control_gate(bit:, targets: [], controls: [], disabled: false, wire_active: true)
      opts = option_string(bit: bit, targets: targets, controls: controls, disabled: disabled, wire_active: wire_active)
      "<%= control_gate #{opts} %>\n"
    end

    def measure(set: nil)
      opts = option_string(set: set)
      opts ? "<%= measure #{opts} %>\n" : "<%= measure %>\n"
    end

    private

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/CyclomaticComplexity
    # rubocop:disable Metrics/PerceivedComplexity
    def option_string(options)
      options_hash = options.keys.each_with_object({}) do |each, h|
        case each
        when :bit
          h[:bit] = options[:bit]
        when :controls
          h[:controls] = options[:controls] unless options[:controls].empty?
        when :targets
          h[:targets] = options[:targets] unless options[:targets].empty?
        when :wire_active
          h[:wire_active] = options[:wire_active] unless options[:wire_active]
        when :if
          h[:if] = "'#{options[:if]}'" if options[:if]
        when :disabled
          h[:disabled] = options[:disabled] if options[:disabled]
        when :set
          h[:set] = "'#{options[:set]}'" if options[:set]
        when :write
          h[:write] = options[:write] if options[:write]
        when :measure
          h[:measure] = options[:measure] if options[:measure]
        when :phi
          h[:phi] = "'#{options[:phi]}'"
        when :theta
          h[:theta] = "'#{options[:theta]}'"
        end
      end

      options_hash.empty? ? nil : options_hash.map { |k, v| "#{k}: #{v}" }.join(', ')
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/CyclomaticComplexity
    # rubocop:enable Metrics/PerceivedComplexity
  end
  # rubocop:enable Metrics/ModuleLength
end
