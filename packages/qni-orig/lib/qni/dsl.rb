module Qni
  class Dsl
    attr_reader :labels
    attr_reader :registers
    attr_reader :time_evolution

    def self.load(dsl)
      new.tap do |obj|
        obj.load_dsl(dsl)
      end
    end

    def initialize
      @labels = []
      @time_evolution = []
    end

    # Labels

    def register(*registers)
      case registers[0]
      when String
        @registers = registers
        @time_evolution << [:register, @registers]
      when Hash
        @registers = registers[0]
        @time_evolution << [:register_span, @registers]
      else
        raise
      end
    end

    def label(*labels)
      @labels = labels
      @time_evolution << [:label, @labels]
    end

    # Code Blocks

    def block(label, &code)
      @have_block = true
      @time_evolution << [:block_start, label]
      code.yield
      @time_evolution << [:block_end]
    end

    # Read and Write

    def write(values)
      case values
      when Hash
        @time_evolution << [:write, values]
      when Integer
        @time_evolution << [:write_all, values]
      else
        raise
      end
    end

    def read(opts)
      targets = opts.dup
      rd_opts = {}

      if opts.fetch(:label, false)
        targets.delete(:label)
        rd_opts[:label] = opts.fetch(:label)
      end

      @time_evolution <<
        if rd_opts.empty?
          [:read, targets]
        else
          [:read, targets, rd_opts]
        end
    end

    # Single Qubit Gates

    def h(*qubits, **opts)
      h_opts = {}
      h_opts[:disabled] = true if opts.fetch(:disabled, false)
      h_opts[:label] = opts.fetch(:label, nil) if opts.fetch(:label, nil)

      @time_evolution <<
        if qubits.empty?
          h_opts.empty? ? [:h_all] : [:h_all, h_opts]
        else
          h_opts.empty? ? [:h, qubits] : [:h, qubits, h_opts]
        end
    end

    def x(*qubits, **opts)
      x_opts = {}
      x_opts[:disabled] = true if opts.fetch(:disabled, false)
      x_opts[:label] = opts.fetch(:label, nil) if opts.fetch(:label, nil)

      @time_evolution <<
        if qubits.empty?
          x_opts.empty? ? [:x_all] : [:x_all, x_opts]
        else
          x_opts.empty? ? [:x, qubits] : [:x, qubits, x_opts]
        end
    end

    def rnot(*qubits, **opts)
      rn_opts = {}
      rn_opts[:disabled] = true if opts.fetch(:disabled, false)
      rn_opts[:label] = opts.fetch(:label, nil) if opts.fetch(:label, nil)

      @time_evolution <<
        if qubits.empty?
          rn_opts.empty? ? [:rnot_all] : [:rnot_all, rn_opts]
        else
          rn_opts.empty? ? [:rnot, qubits] : [:rnot, qubits, rn_opts]
        end
    end

    # rubocop:disable Metrics/MethodLength
    def phase(opts)
      targets = opts.dup
      p_opts = {}

      if opts.is_a?(Hash)
        if opts.fetch(:disabled, false)
          targets.delete(:disabled)
          p_opts[:disabled] = true
        end
        if opts.fetch(:label, false)
          targets.delete(:label)
          p_opts[:label] = opts.fetch(:label)
        end
      end

      @time_evolution <<
        if targets.is_a?(String)
          [:phase_all, theta: targets]
        else
          p_opts.empty? ? [:phase, targets] : [:phase, targets, p_opts]
        end
    end
    # rubocop:enable Metrics/MethodLength

    # Multi Qubit Gates

    def cnot(values)
      @time_evolution <<
        if values.keys.first.is_a?(Array)
          [:ccnot, values]
        else
          [:cnot, values]
        end
    end

    def cphase(values)
      @time_evolution << [:cphase, values]
    end

    def cswap(values)
      @time_evolution << [:cswap, values]
    end

    # Wires

    def down(*qubits)
      @time_evolution << [:down, qubits]
    end

    # Internal APIs

    def load_dsl(dsl)
      tmp = Tempfile.open('dsl') do |f|
        f.puts dsl
        f
      end
      instance_eval File.read(tmp.path), tmp.path
    end

    def nqubit
      @labels.length
    end

    def [](index)
      @time_evolution[index]
    end

    def block?
      @have_block
    end
  end
end
