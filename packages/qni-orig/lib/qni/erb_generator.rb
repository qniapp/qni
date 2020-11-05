require 'qni/circuit_erb'
require 'qni/dsl'

module Qni
  # rubocop:disable Metrics/ClassLength
  class ErbGenerator
    include CircuitErb

    def initialize(dsl)
      @dsl = Dsl.load(dsl)
      @wire_active = [false] * @dsl.nqubit
      @in_block = false
    end

    def generate_erb
      HtmlBeautifier.beautify(<<~ERB)
        <%= circuit nqubit: #{@dsl.nqubit} do %>
          #{body}
          <%= circuit_step shadow_source: true do %>
            #{"<%= dropzone %>\n" * @dsl.nqubit}
          <% end %>
        <% end %>
      ERB
    end

    private

    def body
      @dsl.time_evolution.map { |each| __send__(*each) }.join
    end

    def register(registers)
      circuit_block_divider do
        <<~ERB
          <%= circuit_register_group do %>
            #{registers.map { |each| %(<%= register_label '#{each}' %>\n) }.join}
          <% end %>
        ERB
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
        "#{erb}<% end %>\n"
      end
    end

    def label(labels)
      circuit_block_divider do
        circuit_step do
          labels.map { |each| "<%= qubit_label '#{each}' %>\n" }.join
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
        circuit_step do
          (0...@dsl.nqubit).map do |each|
            dropzone wire_active: @wire_active[each]
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

    # rubocop:disable Metrics/MethodLength
    def write(targets, _label: nil)
      block_divider do
        circuit_step do
          (0...@dsl.nqubit).map do |each|
            if targets.key?(each)
              @wire_active[each] = true
              dropzone do
                draggable(write: true) do
                  "<%= write #{targets[each]} %>\n"
                end
              end
            else
              dropzone wire_active: @wire_active[each]
            end
          end.join
        end
      end
    end
    # rubocop:enable Metrics/MethodLength

    def h_all(opts = {})
      h (0...@dsl.nqubit).to_a, opts
    end

    # rubocop:disable Metrics/MethodLength
    def h(targets, opts = {})
      block_divider do
        circuit_step do
          (0...@dsl.nqubit).map do |each|
            if targets.include?(each)
              dropzone do
                draggable do
                  hadamard_gate disabled: opts.fetch(:disabled, false), if: opts.fetch(:if, nil)
                end
              end
            else
              dropzone wire_active: @wire_active[each]
            end
          end.join
        end
      end
    end
    # rubocop:enable Metrics/MethodLength

    def x_all(opts = {})
      x (0...@dsl.nqubit).to_a, opts
    end

    def x(targets, opts = {})
      circuit_step do
        (0...@dsl.nqubit).map do |bit|
          if targets.include?(bit)
            dropzone do
              draggable do
                not_gate bit: bit, if: opts.fetch(:if, nil)
              end
            end
          else
            dropzone wire_active: @wire_active[bit]
          end
        end.join
      end
    end

    def phase(targets, _opts = {})
      circuit_step do
        (0...@dsl.nqubit).map do |bit|
          if targets.key?(bit)
            dropzone do
              draggable do
                phase_gate bit: bit, theta: targets[bit]
              end
            end
          else
            dropzone wire_active: @wire_active[bit]
          end
        end.join
      end
    end

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/MethodLength
    def swap(targets)
      # rubocop:disable Metrics/BlockLength
      circuit_step do
        (0...@dsl.nqubit).map do |bit|
          wire_top = false
          wire_bottom = false

          if ((targets[0] + 1)...targets[1]).cover?(bit)
            wire_top = true
            wire_bottom = true
          end

          if bit == targets[0] && targets[1] - targets[0] == 1
            dropzone(no_wire: true) do
              draggable do
                down_gate targets: [targets.min]
              end
            end
          elsif bit == targets[1] && targets[1] - targets[0] == 1
            dropzone(no_wire: true) do
              draggable do
                up_gate targets: targets.min
              end
            end
          elsif targets.include?(bit)
            dropzone do
              draggable do
                "<%= swap_gate bit: #{bit}, targets: #{targets} %>\n"
              end
            end
          else
            dropzone wire_top: wire_top, wire_bottom: wire_bottom, wire_active: @wire_active[bit]
          end
        end.join
      end
      # rubocop:enable Metrics/BlockLength
    end

    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/MethodLength
    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/MethodLength
    def cphase(targets)
      controls = targets.keys.first
      theta = targets.values.first

      # rubocop:disable Metrics/BlockLength
      circuit_step do
        (0...@dsl.nqubit).map do |bit|
          top = false
          bottom = false

          bottom = true if controls.first == bit
          top = true if controls.last == bit
          if ((controls.first + 1)...controls.last).cover?(bit)
            top = true
            bottom = true
          end

          if controls.include?(bit)
            if theta == 'π'
              dropzone(wire_active: @wire_active[bit]) do
                draggable do
                  control_gate bit: bit, targets: controls, controls: controls
                end
              end
            else
              dropzone(wire_active: @wire_active[bit]) do
                draggable do
                  phase_gate bit: bit, theta: theta, targets: controls
                end
              end
            end
          else
            dropzone wire_top: top, wire_bottom: bottom, wire_active: @wire_active[bit]
          end
        end.join
      end
      # rubocop:enable Metrics/BlockLength
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/MethodLength

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/MethodLength
    def cnot(candt)
      control = candt.keys.first
      targets = [candt[control]].flatten.sort

      circuit_step do
        (0...@dsl.nqubit).map do |bit|
          if bit == control
            dropzone(wire_active: @wire_active[bit]) do
              draggable do
                control_gate bit: bit, targets: targets, controls: [control]
              end
            end
          elsif targets.include?(bit)
            dropzone do
              draggable do
                not_gate bit: bit, controls: [control]
              end
            end
          else
            g = ([control] + targets).sort
            top_bottom = (g.first..g.last).cover?(bit)
            dropzone wire_top: top_bottom, wire_bottom: top_bottom, wire_active: @wire_active[bit]
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

      # rubocop:disable Metrics/BlockLength
      circuit_step do
        controls_targets = (controls + [target]).sort

        (0...@dsl.nqubit).map do |bit|
          top = false
          bottom = false

          bottom = true if controls_targets.first == bit
          top = true if controls_targets.last == bit
          if ((controls_targets.first + 1)...controls_targets.last).cover?(bit)
            top = true
            bottom = true
          end

          if controls.include?(bit)
            dropzone do
              draggable do
                control_gate bit: bit, targets: [target], controls: controls, wire_active: @wire_active[bit]
              end
            end
          elsif bit == target
            dropzone do
              draggable do
                not_gate bit: bit, controls: controls
              end
            end
          else
            dropzone wire_top: top, wire_bottom: bottom, wire_active: @wire_active[bit]
          end
        end.join
      end
      # rubocop:enable Metrics/BlockLength
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/AbcSize

    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/AbcSize
    def cswap(values)
      control = values.keys.first
      targets = values[control]

      # rubocop:disable Metrics/BlockLength
      circuit_step do
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
            dropzone do
              draggable do
                control_gate bit: each, targets: targets, controls: [control], wire_active: @wire_active[each]
              end
            end
          elsif each == targets[0]
            dropzone(no_wire: true) do
              draggable do
                down_gate targets: [targets.min]
              end
            end
          elsif each == targets[1]
            dropzone(no_wire: true) do
              draggable do
                up_gate targets: targets.min, bottom: true
              end
            end
          else
            dropzone connection_top: top, connection_bottom: bottom, active: @wire_active[each]
          end
        end.join
      end
      # rubocop:enable Metrics/BlockLength
    end
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/AbcSize

    def rnot(targets)
      circuit_step do
        (0...@dsl.nqubit).map do |each|
          if targets.include?(each)
            dropzone do
              draggable do
                "<%= root_not_gate %>\n"
              end
            end
          else
            dropzone active: @wire_active[each]
          end
        end.join
      end
    end

    # rubocop:disable Metrics/MethodLength
    def read(targets, opts = {})
      block_divider do
        circuit_step do
          (0...@dsl.nqubit).map do |bit|
            if targets.include?(bit)
              @wire_active[bit] = false
              dropzone do
                draggable(readout: true) do
                  readout set: opts.fetch(:set, nil)
                end
              end
            else
              dropzone wire_active: @wire_active[bit]
            end
          end.join
        end
      end
    end
    # rubocop:enable Metrics/MethodLength

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/MethodLength
    def down(targets)
      block_divider do
        circuit_step do
          (0...@dsl.nqubit).map do |each|
            if targets.include?(each)
              @wire_active[each] = false
              @wire_active[each + 1] = true if each < @dsl.nqubit
              dropzone(no_wire: true) do
                draggable do
                  down_gate targets: [targets.min]
                end
              end
            else
              dropzone wire_active: @wire_active[each] && !each.zero? && targets.exclude?(each - 1)
            end
          end.join
        end
      end
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/MethodLength
  end
  # rubocop:enable Metrics/ClassLength
end
