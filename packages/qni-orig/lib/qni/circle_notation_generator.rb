require 'open3'
require 'qni/dsl'

module Qni
  class CircleNotationGenerator
    def initialize(circuit)
      @circuit = circuit
      @dsl = Dsl.load(@circuit.dsl)
    end

    def generate_circle_notation
      generate_python_script_file
      size = if @dsl.nqubit < 4
               :base
             elsif @dsl.nqubit == 4
               :sm
             else
               :xs
             end
      HtmlBeautifier.beautify(<<~ERB)
        <%= circle_notation #{size ? "size: :#{size} " : ''}do %>
          #{body}
        <% end %>
      ERB
    end

    private

    def generate_python_script_file
      @sympy_script = Tempfile.open(@circuit.name.parameterize.underscore) do |f|
        backend = File.read(Rails.root.join('lib/python/sympy_backend.py'))
        python = <<~PYTHON
          #!/usr/bin/env python

          #{backend}

        PYTHON
        python += @dsl.time_evolution.map { |each| __send__(*each) }.join
        f.puts python
        f
      end
      Rails.logger.debug "Generated a sympy script = #{@sympy_script.path}"
    end

    def body
      stdout, stderr, status = Open3.capture3('python ' + @sympy_script.path)
      if status.success?
        parse_sympy_stdout stdout
      else
        Rails.logger.error stderr
        raise "Failed to run circuit '#{@circuit.name}'"
      end
    end

    # rubocop:disable Metrics/AbcSize
    # rubocop:disable Metrics/MethodLength
    def parse_sympy_stdout(stdout)
      qubit_circle_groups = []

      stdout.lines.each do |each|
        case each
        when /^#/
          qubit_circle_groups << {}
        when /^Magnitude \(symbolic\): m(\d+) = (.+)/
          ket = Regexp.last_match(1).to_i
          qubit_circle_groups.last[ket] ||= {}
          qubit_circle_groups.last[ket][:symbolic_magnitude] ||= Regexp.last_match(2)
        when /^Magnitude: m(\d+) = (.+)/
          ket = Regexp.last_match(1).to_i
          qubit_circle_groups.last[ket] ||= {}
          qubit_circle_groups.last[ket][:magnitude] ||= Regexp.last_match(2).to_f
        when /^Relational phase \(symbolic\): p(\d+) = (.+)/
          ket = Regexp.last_match(1).to_i
          qubit_circle_groups.last[ket] ||= {}
          qubit_circle_groups.last[ket][:symbolic_relational_phase] ||= Regexp.last_match(2)
        when /^Relational phase: p(\d+) = (.+)/
          ket = Regexp.last_match(1).to_i
          qubit_circle_groups.last[ket] ||= {}
          qubit_circle_groups.last[ket][:relational_phase] ||= Regexp.last_match(2).to_f
        end
      end

      erb = ''
      qubit_circle_groups.each_with_index do |each, index|
        circles = each.keys.map do |ket|
          if each[ket][:magnitude].positive?
            "<%= qubit_circle ket: #{ket}, magnitude: #{each[ket][:magnitude]}, magnitude_string: '#{each[ket][:symbolic_magnitude]}', phase: #{each[ket][:relational_phase]}, phase_string: '#{each[ket][:symbolic_relational_phase]}' %>"
          else
            "<%= qubit_circle ket: #{ket}, magnitude: #{each[ket][:magnitude]}, magnitude_string: '#{each[ket][:symbolic_magnitude]}' %>"
          end
        end

        rows = circles.in_groups_of(16, false).map do |slice|
          <<~ERB
            <%= qubit_circle_group_row do %>
              #{slice.join("\n")}
            <% end %>
          ERB
        end.join("\n")

        erb += <<~ERB
          <%= qubit_circle_group #{index.zero? ? 'hidden: false ' : ''}do %>
            #{rows}
          <% end %>
        ERB
      end

      erb
    end
    # rubocop:enable Metrics/AbcSize
    # rubocop:enable Metrics/MethodLength

    def register(_args); end

    def register_span(_args); end

    def label(_labels)
      "psi = init(#{@dsl.nqubit})\n"
    end

    def block_start(_args); end

    def block_end
      "psi = nop(psi)\n"
    end

    def write_all(value)
      targets = (0...@dsl.nqubit).to_a.each_with_object({}) do |each, h|
        h[each] = value
        h
      end
      write targets
    end

    def write(targets, _label: nil)
      dict = targets.map { |k, v| "#{k}: #{v}" }.join(', ')
      "psi = write({#{dict}}, psi)\n"
    end

    def h_all(opts = {})
      h (0...@dsl.nqubit).to_a, opts
    end

    def h(targets, opts = {})
      if opts.fetch(:disabled, false)
        "psi = nop(psi)\n"
      else
        "psi = h([#{targets.join(', ')}], psi)\n"
      end
    end

    def x_all(opts = {})
      x (0...@dsl.nqubit).to_a, opts
    end

    def x(targets, _opts = {})
      "psi = x([#{targets.join(', ')}], psi)\n"
    end

    def phase(targets, _opts = {})
      dict = targets.map { |k, v| "#{k}: #{v.delete("'").gsub(/π/, 'pi')}" }.join(', ')
      "psi = p({#{dict}}, psi)\n"
    end

    def swap(targets)
      "psi = swap([#{targets.join(', ')}], psi)\n"
    end

    def cphase(targets)
      "psi = cphase(#{targets.keys.first}, #{targets.values.first.delete("'").gsub(/π/, 'pi')}, psi)\n"
    end

    def cnot(targets)
      control = targets.keys.first
      target = targets[control]

      "psi = cnot(#{control}, #{target}, psi)\n"
    end

    def ccnot(targets)
      controls = targets.keys.first
      target = targets[controls]

      "psi = ccnot(#{controls}, #{target}, psi)\n"
    end

    def cccnot(controls, target)
      "psi = cccnot(#{controls}, #{target}, psi)\n"
    end

    def cswap(values)
      control = values.keys.first
      targets = values[control]

      "psi = cswap(#{control}, [#{targets.join(', ')}], psi)\n"
    end

    def rnot(targets)
      "psi = rnot([#{targets.join(', ')}], psi)\n"
    end

    def read(targets, _opts = {})
      dict = targets.map { |k, v| "#{k}: #{v}" }.join(', ')
      "psi = read({#{dict}}, psi)\n"
    end

    def down(targets)
      "psi = down([#{targets.join(', ')}], psi)\n"
    end
  end
end
