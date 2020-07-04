require 'qni/circuit_erb'
require 'qni/dsl'

module Qni
  class ErbGenerator
    include CircuitErb

    def initialize(dsl)
      @dsl = Dsl.load(dsl)
      @wire_active = [false] * @dsl.nqubit
      @in_block = false
    end

    def generate_erb
      # size = if @dsl.nqubit > 6
      #          :extrasmall
      #        elsif @dsl.nqubit > 4
      #          :small
      #        elsif @dsl.nqubit > 3
      #          :base
      #        elsif @dsl.nqubit > 2
      #          :large
      #        else
      #          :extralarge
      #        end
      HtmlBeautifier.beautify(<<~ERB)
        <%= circuit nqubit: #{@dsl.nqubit} do %>
          #{body}
        <% end %>
      ERB
    end

    private

    def body
      @dsl.time_evolution.map { |each| __send__(*each) }.join
    end

    def register(registers)
      circuit_block_divider do
        erb = "<%= circuit_register_group do %>\n"
        erb += registers.map { |each| %(<%= register_label label: '#{each}' %>\n) }.join
        erb + "<% end %>\n"
      end
    end

    def register_span(registers)
      start = 1

      circuit_block_divider do
        erb = "<%= circuit_register_group_span rows: #{@dsl.nqubit} do %>\n"
        erb += registers.to_a.reverse.map do |label, span|
          str = "<%= register_label_span label: '#{label}', span: #{span}, start: #{start} %>\n"
          start += span
          str
        end.reverse.join
        erb + "<% end %>\n"
      end
    end

    def label(labels)
      circuit_block_divider do
        circuit_column do
          labels.map { |each| "<%= qubit_label label: '#{each}' %>\n" }.join
        end
      end
    end

    def block_start(label)
      @in_block = true
      "<%= circuit_block label: '#{label}' do %>\n"
    end

    def block_end(index)
      @in_block = false
      erb = "<% end %>\n"
      return erb if @dsl[index + 1] && @dsl[index + 1].first != :block_start

      erb + block_divider do
        circuit_column do
          (0...@dsl.nqubit).map do |each|
            wire(active: @wire_active[each])
          end.join
        end
      end
    end

    def write_all(value)
      targets = (0...@dsl.nqubit).to_a.each_with_object({}) do |each, h|
        h[each] = value
        h
      end
      write targets
    end

    def write(targets, _label: nil)
      block_divider do
        circuit_column do
          (0...@dsl.nqubit).map do |each|
            if targets.key?(each)
              @wire_active[each] = true
              "<%= write value: #{targets[each]} %>\n"
            else
              wire active: @wire_active[each]
            end
          end.join
        end
      end
    end

    def h_all(opts = {})
      h (0...@dsl.nqubit).to_a, opts
    end

    def h(targets, opts = {})
      block_divider do
        circuit_column do
          (0...@dsl.nqubit).map do |each|
            if targets.include?(each)
              hadamard_gate disabled: opts.fetch(:disabled, false), label: opts.fetch(:label, nil)
            else
              wire active: @wire_active[each]
            end
          end.join
        end
      end
    end

    def x_all(opts = {})
      x (0...@dsl.nqubit).to_a, opts
    end

    def x(targets, opts = {})
      circuit_column do
        (0...@dsl.nqubit).map do |each|
          if targets.include?(each)
            not_gate label: opts.fetch(:label, nil)
          else
            wire active: @wire_active[each]
          end
        end.join
      end
    end

    def phase(targets, _opts = {})
      circuit_column do
        (0...@dsl.nqubit).map do |each|
          if targets.key?(each)
            phase_gate theta: targets[each]
          else
            wire active: @wire_active[each]
          end
        end.join
      end
    end

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/CyclomaticComplexity
    # rubocop:disable Metrics/PerceivedComplexity
    def swap(targets)
      circuit_column do
        (0...@dsl.nqubit).map do |each|
          top = false
          bottom = false

          if ((targets[0] + 1)...targets[1]).cover?(each)
            top = true
            bottom = true
          end

          if each == targets[0] && targets[1] - targets[0] == 1
            "<%= down_wire %>\n"
          elsif each == targets[1] && targets[1] - targets[0] == 1
            "<%= up_wire %>\n"
          elsif each == targets[0] && targets[1] - targets[0] > 1
            "<%= swap_gate bottom: true %>\n"
          elsif each == targets[1] && targets[1] - targets[0] > 1
            "<%= swap_gate top: true %>\n"
          else
            wire top: top, bottom: bottom, active: @wire_active[each]
          end
        end.join
      end
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/CyclomaticComplexity
    # rubocop:enable Metrics/PerceivedComplexity

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/MethodLength
    def cphase(targets)
      controls = targets.keys.first
      theta = targets.values.first

      circuit_column do
        (0...@dsl.nqubit).map do |each|
          top = false
          bottom = false

          bottom = true if controls.first == each
          top = true if controls.last == each
          if ((controls.first + 1)...controls.last).cover?(each)
            top = true
            bottom = true
          end

          if controls.include?(each)
            if theta == 'π'
              control_dot top: top, bottom: bottom, wire_active: @wire_active[each]
            else
              phase_gate theta: theta, top: top, bottom: bottom, wire_active: @wire_active[each]
            end
          else
            wire top: top, bottom: bottom, active: @wire_active[each]
          end
        end.join
      end
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/MethodLength

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/MethodLength
    def cnot(candt)
      control = candt.keys.first
      targets = [candt[control]].flatten.sort

      circuit_column do
        (0...@dsl.nqubit).map do |each|
          if each == control
            control_dot top: targets.last < control, bottom: control < targets.first, wire_active: @wire_active[each]
          elsif targets.include?(each)
            not_gate top: control < each || targets.first < each, bottom: each < control || each < targets.last
          else
            g = ([control] + targets).sort
            top_bottom = (g.first..g.last).cover?(each)
            wire top: top_bottom, bottom: top_bottom, active: @wire_active[each]
          end
        end.join
      end
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/MethodLength

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/AbcSize
    def ccnot(targets)
      controls = targets.keys.first
      target = targets[controls]

      circuit_column do
        controls_targets = (controls + [target]).sort

        (0...@dsl.nqubit).map do |each|
          top = false
          bottom = false

          bottom = true if controls_targets.first == each
          top = true if controls_targets.last == each
          if ((controls_targets.first + 1)...controls_targets.last).cover?(each)
            top = true
            bottom = true
          end

          if controls.include?(each)
            control_dot top: top, bottom: bottom, wire_active: @wire_active[each]
          elsif each == target
            not_gate top: top, bottom: bottom
          else
            wire top: top, bottom: bottom, active: @wire_active[each]
          end
        end.join
      end
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/AbcSize

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/AbcSize
    def cswap(values)
      control = values.keys.first
      targets = values[control]

      circuit_column do
        control_targets = ([control] + targets).sort

        (0...@dsl.nqubit).map do |each|
          top = false
          bottom = false

          bottom = true if control_targets.first == each
          top = true if control_targets.last == each
          if ((control_targets.first + 1)...control_targets.last).cover?(each)
            top = true
            bottom = true
          end

          if control == each
            control_dot top: top, bottom: bottom, wire_active: @wire_active[each]
          elsif each == targets[0]
            "<%= down_wire %>\n"
          elsif each == targets[1]
            "<%= up_wire bottom: true %>\n"
          else
            wire top: top, bottom: bottom, active: @wire_active[each]
          end
        end.join
      end
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/AbcSize

    def rnot(targets)
      circuit_column do
        (0...@dsl.nqubit).map do |each|
          if targets.include?(each)
            "<%= root_not_gate %>\n"
          else
            wire
          end
        end.join
      end
    end

    def read(targets, opts = {})
      block_divider do
        circuit_column do
          (0...@dsl.nqubit).map do |each|
            if targets.key?(each)
              @wire_active[each] = false
              readout value: targets[each], label: opts.fetch(:label, nil)
            else
              wire active: @wire_active[each]
            end
          end.join
        end
      end
    end

    def down(targets)
      block_divider do
        circuit_column do
          (0...@dsl.nqubit).map do |each|
            if targets.include?(each)
              @wire_active[each] = false
              @wire_active[each + 1] = true if each < @dsl.nqubit
              "<%= down_wire %>\n"
            else
              wire active: @wire_active[each] && !each.zero? && !targets.include?(each - 1)
            end
          end.join
        end
      end
    end
  end
end
