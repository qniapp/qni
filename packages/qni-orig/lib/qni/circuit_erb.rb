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
        <%= circuit_step do %>
          #{block.yield}
        <% end %>
      ERB
    end

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/CyclomaticComplexity
    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/PerceivedComplexity
    def dropzone(wire_top: false, wire_bottom: false, wire_active: true, no_wire: false, &block)
      opts_h = %i[wire_top wire_bottom wire_active no_wire].each_with_object({}) do |each, h|
        case each
        when :wire_top
          h[:wire_top] = true if wire_top
        when :wire_bottom
          h[:wire_bottom] = true if wire_bottom
        when :wire_active
          h[:wire_active] = false unless wire_active
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

    def draggable(write: false, readout: false, &block)
      opts = option_string(write: write, readout: readout)
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
      opts = option_string(disabled: opts.fetch(:disabled, false), if: opts.fetch(:if, nil))
      opts ? "<%= hadamard_gate #{opts} %>\n" : "<%= hadamard_gate %>\n"
    end

    def not_gate(opts = {})
      opts = option_string(bit: opts.fetch(:bit), controls: opts.fetch(:controls, []), if: opts.fetch(:if, nil))
      "<%= not_gate #{opts} %>\n"
    end

    def phase_gate(bit:, theta:, targets: [], wire_active: true)
      opts = option_string(bit: bit, theta: theta, targets: targets, wire_active: wire_active)
      "<%= phase_gate #{opts} %>\n"
    end

    def control_gate(bit:, targets:, controls:, wire_active: true)
      opts = option_string(bit: bit, targets: targets, controls: controls, wire_active: wire_active)
      "<%= control_gate #{opts} %>\n"
    end

    def readout(set: nil)
      opts = option_string(set: set)
      opts ? "<%= readout #{opts} %>\n" : "<%= readout %>\n"
    end

    def down_gate(targets:)
      opts = option_string(targets: targets)
      "<%= down_gate #{opts} %>\n"
    end

    def up_gate(targets:, bottom: false)
      if bottom
        "<%= up_gate targets: #{targets}, bottom: true %>\n"
      else
        "<%= up_gate targets: #{targets} %>\n"
      end
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
        when :readout
          h[:readout] = options[:readout] if options[:readout]
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
