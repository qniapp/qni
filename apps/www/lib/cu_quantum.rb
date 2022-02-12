require 'pycall/import'
include PyCall::Import

PyCall.exec(<<~PYTHON)
import cirq
import io,sys
import numpy as np
import qsimcirq
from sympy import *
from sympy.parsing.sympy_parser import parse_expr, standard_transformations, implicit_multiplication_application, convert_xor
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

class cirqbridge:
    def __init__(self):
        return

    def run_simulation(self,numofqubits,_circuit_from_qni):
        transformations = (standard_transformations + (implicit_multiplication_application,) + (convert_xor,))
        circuit_from_qni = []
        for a in _circuit_from_qni:
            if len(a) != 0:
                circuit_from_qni.append(a)
        print(circuit_from_qni)
        sys.stdout.flush()
        qubits = cirq.LineQubit.range(numofqubits)
        print("numofqubits") 
        print(numofqubits)
        sys.stdout.flush()
        c = cirq.Circuit()
        i = 0
        m = 0
        measurement = []
        for column_qni in circuit_from_qni:
            print("circuit column", i, column_qni)
            i = i + 1
            j = 0
            for circuit_qni in column_qni:
                j = j + 1
                print("procssing circit ...")
                print(column_qni)
                sys.stdout.flush()
                if circuit_qni['type'] == u'H':
                    target = circuit_qni['targets'][0]
                    if not "controls" in circuit_qni:
                        c.append(cirq.H(qubits[target]))
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        print("controledqubits")
                        sys.stdout.flush()
                        print(controledqubits)
                        sys.stdout.flush()
                        c.append(cirq.ControlledOperation(controledqubits, cirq.H(qubits[target])))
                elif circuit_qni['type'] == u'Measure':
                    key= 'm' + str(m)
                    c.append(cirq.measure(qubits[j-1], key=key))
                    m = m + 1
                elif circuit_qni['type'] == u'Write':
                    if circuit_qni['value'] == 0:
                        c.append(cirq.ops.reset(qubits[j-1]))
                    elif circuit_qni['value'] == 1:
                        c.append(cirq.ops.reset(qubits[j-1]))
                        c.append(cirq.X(qubits[j-1]))
                    else:
                        pass #nop
                elif circuit_qni['type'] == u'':
                    pass #nop
                elif circuit_qni['type'] == u'1':
                    pass #nop
                else:
                    print("unsupported gate", circuit_qni['type'])
            print("circuit column", column_qni)

        print('Cirq circiuts')
        print(c)
        print('Cirq start:')
        cirq_simulator = cirq.Simulator()
        cirq_results = cirq_simulator.simulate(c)
        print('Cirq end')
        print('Cirq print result:')
        print(cirq_results)
        sys.stdout.flush()

        print('qsim results:')
        qsim_simulator = qsimcirq.QSimSimulator()
        qsim_results = qsim_simulator.simulate(c)
        print(qsim_results)
        sys.stdout.flush()

        print('qsim GPU results:')
        gpu_options = qsimcirq.QSimOptions(use_gpu=True)
        qsim_simulator = qsimcirq.QSimSimulator(qsim_options=gpu_options)
        qsim_gpu_results = qsim_simulator.simulate(c)
        print(qsim_gpu_results)
        sys.stdout.flush()

        print("python cirqbridge end")
        #return (result.final_state_vector)

PYTHON

class CuQuantum

  def initialize(circuit_id:, qubit_count:, step_index:, steps:, targets:)
    @circuit_id = circuit_id
    @qubit_count = qubit_count
    @step_index = step_index
    @steps = steps
    @targets = targets
  end

  def run
    cirqbridge = PyCall.eval('cirqbridge').call
    cirqbridge.run_simulation(@qubit_count, @steps)
    @steps.map.with_index do |each, index|
      execute_step each, index
    end
  end

  private

  # rubocop:disable Metrics/MethodLength
  # rubocop:disable Metrics/CyclomaticComplexity
  # rubocop:disable Metrics/AbcSize
  def execute_step(step, index)
    measured_bits = {}

    step.each_with_index do |each, bit|
      case each.fetch('type')
      when 'H'
      # {"type"=>"H", "targets"=>[], "if"=>nil}
      when 'X'
      # {"type"=>"X", "targets"=>[], "if"=>nil}
      when 'Y'
      # {"type"=>"Y", "targets"=>[], "if"=>nil}
      when 'Z'
      # {"type"=>"Z", "targets"=>[], "if"=>nil}
      when 'P'
      # {"type"=>"P", "phi"=>"pi/2", "targets"=>[], "targets"=>[0], "if"=>nil}
      when 'X^'
      # {"type"=>"X^", "targets"=>[], "if"=>nil}
      when 'Rx'
      # {"type"=>"Rx", "theta"=>"pi/2", "targets"=>[], "targets"=>[], "if"=>nil}
      when 'Ry'
      # {"type"=>"Ry", "theta"=>"pi/2", "targets"=>[], "targets"=>[], "if"=>nil}
      when 'Rz'
      # {"type"=>"Rz", "theta"=>"pi/2", "targets"=>[], "targets"=>[], "if"=>nil}
      when 'Swap'
      # {"type"=>"Swap", "targets"=>[], "targets"=>[]}
      when ''
      # {"type"=>"", "targets"=>[0]}
      when 'Bloch'
      # {"type"=>"Bloch"}
      when 'Write'
      # {"type"=>"Write", "value"=>0}
      when 'Measure'
        # {"type"=>"Measure", "flag"=>""}
        measured_bits[bit] = [0, 1].sample # rubocop:disable Performance/CollectionLiteralInLoop
      when '|1>'
      # NOP
      when '|0>'
      # NOP
      else
        raise "Unknown operation: #{each.inspect}"
      end
    end

    amplitudes =
      if index == @step_index
        @targets.index_with do
          [rand, 0]
        end
      end

    { amplitudes: amplitudes, measuredBits: measured_bits, blochVectors: {} }
  end
  # rubocop:enable Metrics/MethodLength
  # rubocop:enable Metrics/CyclomaticComplexity
  # rubocop:enable Metrics/AbcSize
end
