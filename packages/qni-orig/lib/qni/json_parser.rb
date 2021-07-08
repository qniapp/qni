require 'qni/circuit_erb'

module Qni
  # rubocop:disable Metrics/ClassLength
  class JsonParser
    include CircuitErb

    VARIABLE_NAME_REGEXP = '[_[:lower:]][_[:alnum:]]*'.freeze
    CONTROLLABLE_GATES = [/^H/, /^X/, /^Y/, /^Z/, /^P/, /^Rx/, /^Ry/, /^Rz/, 'Swap'].freeze

    def initialize(json)
      @json = JSON.parse(json)
      @wire_active = [false] * nqubit
      @wire_active_orig = [false] * nqubit
      @in_circuit_block = false
    end

    def nqubit
      @json['cols'].map(&:length).max
    end

    def erb
      HtmlBeautifier.beautify(<<~ERB)
        <%= circuit nqubit: #{nqubit} do %>
          #{labels}
          #{initial_writes}
          #{columns}
          <%= circuit_step shadow_source: true do %>
            #{"<%= dropzone %>\n" * nqubit}
          <% end %>
        <% end %>
      ERB
    end

    private

    def labels
      circuit_block_divider do
        circuit_step do
          (0...nqubit).map do |each|
            label(format('%#x', 2**each))
          end.join
        end
      end
    end

    def initial_writes
      return if @json['init'] == false

      circuit_block_divider do
        circuit_step do
          (0...nqubit).map do |each|
            write each, @json.dig('init', each) || 0
          end.join
        end
      end
    end

    def columns
      @json['cols'].map.with_index do |each, i|
        column each, i
      end.join
    end

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/CyclomaticComplexity
    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/PerceivedComplexity
    def column(gates, index)
      controls = gates.each.with_index.inject([]) do |result, (each, i)|
        each == '•' ? result << i : result
      end
      i_gate_connections = find_i_gate_connections(gates)

      # rubocop:disable Metrics/BlockLength
      step_erb = (0...nqubit).map do |bit|
        case gates[bit]
        when /^\|(0|1)>$/
          write bit, Regexp.last_match(1)
        when 'H', /^H<(#{VARIABLE_NAME_REGEXP})$/o
          apply_h bit, controls: controls, gates: gates, if: Regexp.last_match(1)
        when 'X', /^X<(#{VARIABLE_NAME_REGEXP})$/o
          apply_x bit, controls: controls, gates: gates, if: Regexp.last_match(1)
        when 'Y', /^Y<(#{VARIABLE_NAME_REGEXP})$/o
          apply_y bit, controls: controls, gates: gates, if: Regexp.last_match(1)
        when 'Z', /^Z<(#{VARIABLE_NAME_REGEXP})$/o
          apply_z bit, controls: controls, gates: gates, if: Regexp.last_match(1)
        when 'X^½', /^X\^½<(#{VARIABLE_NAME_REGEXP})$/o
          apply_root_not bit, controls: controls, gates: gates, if: Regexp.last_match(1)
        when /^Rx\((\S+)\)$/
          apply_rx bit, Regexp.last_match(1), controls: controls, gates: gates
        when /^Ry\((\S+)\)$/
          apply_ry bit, Regexp.last_match(1), controls: controls, gates: gates
        when /^Rz\((\S+)\)$/
          apply_rz bit, Regexp.last_match(1), controls: controls, gates: gates
        when 'P', /^P\((\S+)\)$/
          apply_phase bit, controls: controls, gates: gates, url_phi: Regexp.last_match(1)
        when 'Swap'
          apply_swap bit, controls, gates
        when 'Measure'
          apply_measure bit
        when /^Measure>(#{VARIABLE_NAME_REGEXP})$/o
          apply_measure bit, set: Regexp.last_match(1)
        when '•'
          apply_control bit, controls, gates
        when 1
          i bit, i_gate_connections
        when /^{(.+)$/
          @in_circuit_block = true
          ''
        when /^}$/
          @in_circuit_block = false
          ''
        when '…'
          spacer bit
        end || (i bit, i_gate_connections)
      end.join
      # rubocop:enable Metrics/BlockLength

      if gates[0].is_a?(String) && /^{(.+)$/=~ gates[0]
        label = Regexp.last_match(1)
        "<%= circuit_block label: '#{label}' do %>\n"
      elsif gates[0] == '}'
        spacer =
          if @json['cols'][index + 1] &&
             @json['cols'][index + 1].first.is_a?(String) &&
             @json['cols'][index + 1].first.match?(/^{/)
            circuit_block_divider do
              circuit_step do
                (0...nqubit).map do |each|
                  dropzone wire_active: @wire_active[each]
                end.join
              end
            end
          else
            ''
          end
        "<% end %>\n#{spacer}"
      elsif @in_circuit_block
        circuit_step do
          step_erb
        end
      else
        circuit_block_divider do
          circuit_step do
            step_erb
          end
        end
      end
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/CyclomaticComplexity
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/PerceivedComplexity

    def label(string)
      "<%= qubit_label '#{string}' %>\n"
    end

    def write(bit, value)
      @wire_active[bit] = true
      @wire_active_orig[bit] = true
      dropzone do
        "<%= write #{value} %>\n"
      end
    end

    def apply_h(bit, opts = {})
      controls = opts.fetch(:controls)
      targets = if controls.empty?
                  []
                else
                  gate_bits(opts.fetch(:gates), *CONTROLLABLE_GATES) - [bit]
                end

      dropzone(wire_active: @wire_active[bit]) do
        hadamard_gate bit: bit, controls: controls, targets: targets, if: opts[:if]
      end
    end

    def apply_x(bit, opts = {})
      controls = opts.fetch(:controls)
      targets = if controls.empty?
                  []
                else
                  gate_bits(opts.fetch(:gates), *CONTROLLABLE_GATES) - [bit]
                end

      dropzone(wire_active: @wire_active[bit]) do
        not_gate bit: bit, controls: controls, targets: targets, if: opts[:if]
      end
    end

    def apply_y(bit, opts = {})
      controls = opts.fetch(:controls)
      targets = if controls.empty?
                  []
                else
                  gate_bits(opts.fetch(:gates), *CONTROLLABLE_GATES) - [bit]
                end

      dropzone(wire_active: @wire_active[bit]) do
        y_gate bit: bit, controls: controls, targets: targets, if: opts[:if]
      end
    end

    def apply_z(bit, opts = {})
      controls = opts.fetch(:controls)
      targets = if controls.empty?
                  []
                else
                  gate_bits(opts.fetch(:gates), *CONTROLLABLE_GATES) - [bit]
                end

      dropzone(wire_active: @wire_active[bit]) do
        z_gate bit: bit, controls: controls, targets: targets, if: opts[:if]
      end
    end

    def apply_rx(bit, theta, opts = {})
      controls = opts.fetch(:controls)
      targets = if controls.empty?
                  []
                else
                  gate_bits(opts.fetch(:gates), *CONTROLLABLE_GATES) - [bit]
                end

      dropzone(wire_active: @wire_active[bit]) do
        rx_gate bit: bit, theta: parse_radian(theta), controls: controls, targets: targets, if: opts[:if]
      end
    end

    def apply_ry(bit, theta, opts = {})
      controls = opts.fetch(:controls)
      targets = if controls.empty?
                  []
                else
                  gate_bits(opts.fetch(:gates), *CONTROLLABLE_GATES) - [bit]
                end

      dropzone(wire_active: @wire_active[bit]) do
        ry_gate bit: bit, theta: parse_radian(theta), controls: controls, targets: targets, if: opts[:if]
      end
    end

    def apply_rz(bit, theta, opts = {})
      controls = opts.fetch(:controls)
      targets = if controls.empty?
                  []
                else
                  gate_bits(opts.fetch(:gates), *CONTROLLABLE_GATES) - [bit]
                end

      dropzone(wire_active: @wire_active[bit]) do
        rz_gate bit: bit, theta: parse_radian(theta), controls: controls, targets: targets, if: opts[:if]
      end
    end

    def apply_root_not(bit, opts = {})
      controls = opts.fetch(:controls)
      targets = if controls.empty?
                  []
                else
                  gate_bits(opts.fetch(:gates), *CONTROLLABLE_GATES) - [bit]
                end

      dropzone(wire_active: @wire_active[bit]) do
        root_not_gate bit: bit, controls: controls, targets: targets, if: opts[:if]
      end
    end

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/PerceivedComplexity
    def apply_phase(bit, controls:, gates:, url_phi:)
      phi = url_phi.nil? ? 'π' : parse_radian(url_phi)

      if controls.empty?
        targets = gates.each.with_index.inject([]) do |result, (each, index)|
          if url_phi
            "P(#{url_phi})" == each ? result << index : result
          else
            ['P', 'P(π)'].include?(each) ? result << index : result # rubocop:disable Performance/CollectionLiteralInLoop
          end
        end.sort

        if targets.length < 2
          dropzone(wire_active: @wire_active[bit]) do
            phase_gate bit: bit, phi: phi
          end
        else
          dropzone(wire_active: @wire_active[bit]) do
            phase_gate bit: bit, phi: phi, targets: targets
          end
        end
      else
        targets = gates.each.with_index.inject([]) do |result, (each, index)|
          case each
          when 'H', 'X', 'Swap', '•', /^P/
            result << index
          else
            result
          end
        end.sort

        dropzone(wire_active: @wire_active[bit]) do
          phase_gate bit: bit, phi: phi, controls: controls, targets: targets
        end
      end
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/PerceivedComplexity

    # rubocop:disable Metrics/MethodLength
    def parse_radian(str)
      unicode_pi_fractions = {
        '½' => 'π/2',
        '¼' => 'π/4',
        '¾' => '3π/4',
        '⅓' => 'π/3',
        '⅔' => '2π/3',
        '⅕' => 'π/5',
        '⅖' => '2π/5',
        '⅗' => '3π/5',
        '⅘' => '4π/5',
        '⅙' => 'π/6',
        '⅚' => '5π/6',
        '⅐' => 'π/7',
        '⅛' => 'π/8',
        '⅜' => '3π/8',
        '⅝' => '5π/8',
        '⅞' => '7π/8',
        '⅑' => 'π/9',
        '⅒' => 'π/10'
      }

      if /-(\S+)/=~ str
        if unicode_pi_fractions[Regexp.last_match(1)]
          "-#{unicode_pi_fractions.fetch(Regexp.last_match(1))}"
        else
          "-#{Regexp.last_match(1).tr('_', '/')}"
        end
      else
        unicode_pi_fractions[str] ||
          str.tr('_', '/')
      end
    end
    # rubocop:enable Metrics/MethodLength

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/AbcSize
    def apply_swap(bit, controls, gates)
      targets = gates.each.with_index.inject([]) do |result, (each, index)|
        each == 'Swap' ? result << index : result
      end.sort

      other_targets = targets - [bit]

      if other_targets.length == 1
        other_target = other_targets.first
        @wire_active[bit] = @wire_active_orig[other_target]
        dropzone(input_wire_active: @wire_active_orig[bit],
                 output_wire_active: @wire_active_orig[other_target]) do
          "<%= swap_gate bit: #{bit}, targets: #{targets}, controls: #{controls} %>\n"
        end
      else
        dropzone(wire_active: @wire_active[bit]) do
          "<%= swap_gate bit: #{bit}, targets: #{targets}, controls: #{controls}, disabled: true %>\n"
        end
      end
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/AbcSize

    def apply_measure(bit, set: nil)
      @wire_active[bit] = false
      @wire_active_orig[bit] = false

      dropzone do
        measure set: set
      end
    end

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/AbcSize
    def apply_control(bit, controls, gates)
      targets = gates.each.with_index.inject([]) do |result, (each, index)|
        case each
        when *CONTROLLABLE_GATES
          result << index
        else
          result
        end
      end.sort

      if targets.empty?
        if controls.length < 2
          dropzone(wire_active: @wire_active[bit]) do
            control_gate bit: bit, disabled: true, wire_active: @wire_active[bit]
          end
        else
          dropzone(wire_active: @wire_active[bit]) do
            control_gate bit: bit, targets: controls, controls: controls, wire_active: @wire_active[bit]
          end
        end
      else
        dropzone(wire_active: @wire_active[bit]) do
          control_gate bit: bit, targets: targets, controls: controls, wire_active: @wire_active[bit]
        end
      end
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/AbcSize

    def i(bit, i_gate_connections)
      dropzone wire_top: i_gate_connections.dig(bit, :wire_top),
               wire_bottom: i_gate_connections.dig(bit, :wire_bottom),
               wire_active: @wire_active[bit]
    end

    def spacer(bit)
      dropzone wire_active: @wire_active[bit]
    end

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/CyclomaticComplexity
    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/PerceivedComplexity
    def find_i_gate_connections(gates)
      connected_gates = []
      connections = {}

      controls = gates.each.with_index.inject([]) do |result, (each, i)|
        each == '•' ? result << i : result
      end

      controllables = gates.each.with_index.inject([]) do |result, (each, index)|
        case each
        when *CONTROLLABLE_GATES
          result << index
        else
          result
        end
      end

      # CX, CH etc.
      if controls.length.positive? && controllables.length.positive?
        connected_gates += controls
        connected_gates += controllables
      end

      # CPHASE
      gates.select do |each|
        each.is_a?(String) && each.match?(/^P\(\S+\)$/)
      end.group_by(&:itself).each_value do |each| # rubocop:disable Style/MultilineBlockChain
        if each.is_a?(Array) && each.length == 2
          connected_gates += gates.filter_map.with_index { |gate, i| i if gate == each.first }
        end
      end

      # CZ (C-C-C-...)
      connected_gates += controls if controls.length > 1 && controllables.empty?

      # Swap-Swap
      swaps = gates.each.with_index.inject([]) do |result, (each, index)|
        each == 'Swap' ? result << index : result
      end
      connected_gates += swaps if swaps.length == 2

      if connected_gates.length > 1
        (0..nqubit).each do |each|
          if connected_gates.min < each && each < connected_gates.max
            connections[each] = { wire_top: true, wire_bottom: true }
          end
        end
      end

      connections
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/CyclomaticComplexity
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/PerceivedComplexity

    def gate_bits(gates, *patterns)
      gates.each.with_index.inject([]) do |result, (each, index)|
        case each
        when *patterns
          result << index
        else
          result
        end
      end.sort
    end

    def contains_circuit_block_divider?
      @json['cols'].any? { |each| each.first.is_a?(String) && /^{/=~ each.first }
    end
  end
  # rubocop:enable Metrics/ClassLength
end
