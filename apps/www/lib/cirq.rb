# coding: utf-8
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

    def run_simulation(self,numofqubits,_circuit_from_qni,step_index):
        print("python cirqbridge start")
        sys.stdout.flush()
        transformations = (standard_transformations + (implicit_multiplication_application,) + (convert_xor,))
        circuit_from_qni = []
        for a in _circuit_from_qni:
            if len(a) != 0:
                circuit_from_qni.append(a)
        print(circuit_from_qni)
        sys.stdout.flush()
        qubits = cirq.LineQubit.range(numofqubits)
        c = cirq.Circuit()
        i = 0
        m = 0
        measurement = []
        _step_index = 0
        sys.stdout.flush()
        for column_qni in circuit_from_qni:
            if _step_index > step_index:
                break
            _step_index = _step_index + 1
            print("circuit column", i, column_qni)
            i = i + 1
            j = 0
            for circuit_qni in column_qni:
                j = j + 1
                print("procssing circit ...")
                print(column_qni)
                sys.stdout.flush()
                if circuit_qni['type'] == u'H':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.H(index) for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.H(index)) for index in targetqubits ])
                elif circuit_qni['type'] == u'X':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.X(index) for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.X(index)) for index in targetqubits ])
                elif circuit_qni['type'] == u'Y':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.Y(index) for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.Y(index)) for index in targetqubits ])
                elif circuit_qni['type'] == u'Z':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.Z(index) for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.Z(index)) for index in targetqubits ])
                elif circuit_qni['type'] == u'Rx':
                    _angle = circuit_qni['angle'].replace(u'π','pi')
                    expr = parse_expr(_angle, transformations=transformations)
                    angle = float(expr.evalf())
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.rx(angle).on(index) for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.rx(angle).on(index)) for index in targetqubits ])
                elif circuit_qni['type'] == u'Ry':
                    _angle = circuit_qni['angle'].replace(u'π','pi')
                    expr = parse_expr(_angle, transformations=transformations)
                    angle = float(expr.evalf())
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.ry(angle).on(index) for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.ry(angle).on(index)) for index in targetqubits ])
                elif circuit_qni['type'] == u'Rz':
                    _angle = circuit_qni['angle'].replace(u'π','pi')
                    expr = parse_expr(_angle, transformations=transformations)
                    angle = float(expr.evalf())
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.rz(angle).on(index) for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.rz(angle).on(index)) for index in targetqubits ])
                elif circuit_qni['type'] == u'P':
                    _angle = circuit_qni['angle'].replace(u'π','pi') + '/ pi'
                    expr = parse_expr(_angle, transformations=transformations)
                    angle = float(expr.evalf())
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.ZPowGate(exponent=angle).on(index) for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.ZPowGate(exponent=angle).on(index)) for index in targetqubits ])
                elif circuit_qni['type'] == u'T':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.Z(index)**0.25 for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.Z(index)**0.25) for index in targetqubits ])
                elif circuit_qni['type'] == u'X^':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        c.append([ cirq.X(index)**0.5 for index in targetqubits] )
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        c.append([ cirq.ControlledOperation(controledqubits, cirq.X(index)**0.5) for index in targetqubits ])
                elif circuit_qni['type'] == u'|0>':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    c.append([ cirq.ops.reset(index) for index in targetqubits] )
                elif circuit_qni['type'] == u'|1>':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    c.append([ cirq.ops.reset(index) for index in targetqubits] )
                    c.append([ cirq.X(index) for index in targetqubits] )
                elif circuit_qni['type'] == u'Measure':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    c.append([ cirq.measure(index, key = 'm' + str(m + i))  for i, index in enumerate(targetqubits)] )
                    m = m + len(targetqubits)
                elif circuit_qni['type'] == u'Swap':
                    targetqubit0=qubits[circuit_qni['targets'][0]]
                    targetqubit1=qubits[circuit_qni['targets'][1]]
                    c.append(cirq.SWAP(targetqubit0,targetqubit1))
                elif circuit_qni['type'] == u'':
                    pass #nop
                else:
                    print("unsupported gate", circuit_qni['type'])
                    exit(1)
            print("circuit column", column_qni)

        print("")
        print('Cirq circiut')
        print(c)
        cirq_simulator = cirq.Simulator()
        cirq_result = cirq_simulator.simulate(c)
        print('Cirq result:')
        print(cirq_result)
        sys.stdout.flush()

        qsim_simulator = qsimcirq.QSimSimulator()
        qsim_result = qsim_simulator.simulate(c)
        print('qsim result:')
        print(qsim_result)
        sys.stdout.flush()

        gpu_options = qsimcirq.QSimOptions(use_gpu=True)
        qsim_simulator = qsimcirq.QSimSimulator(qsim_options=gpu_options)
        qsim_gpu_result = qsim_simulator.simulate(c)
        print('qsim GPU result:')
        print(qsim_gpu_result)
        sys.stdout.flush()
        print("")

        print("python cirqbridge end")
        sys.stdout.flush()
        #return (result.final_state_vector)

PYTHON

class Cirq
  def initialize(circuit_id:, qubit_count:, step_index:, steps:, targets:)
    @circuit_id = circuit_id
    @qubit_count = qubit_count
    @step_index = step_index
    @steps = steps
    @targets = targets
  end

  def run
    cirqbridge = PyCall.eval('cirqbridge').call
    cirqbridge.run_simulation(@qubit_count, @steps, @step_index)
    @steps.map.with_index { |each, index| execute_step each, index }
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
        # {"type"=>"H", "controls"=>[], "if"=>nil}
      when 'X'
        # {"type"=>"X", "controls"=>[], "if"=>nil}
      when 'Y'
        # {"type"=>"Y", "controls"=>[], "if"=>nil}
      when 'Z'
        # {"type"=>"Z", "controls"=>[], "if"=>nil}
      when 'P'
        # {"type"=>"P", "phi"=>"pi/2", "controls"=>[], "targets"=>[0], "if"=>nil}
      when 'X^'
        # {"type"=>"X^", "controls"=>[], "if"=>nil}
      when 'X^½'
        # NOP
      when 'Rx'
        # {"type"=>"Rx", "theta"=>"pi/2", "controls"=>[], "targets"=>[], "if"=>nil}
      when 'Ry'
        # {"type"=>"Ry", "theta"=>"pi/2", "controls"=>[], "targets"=>[], "if"=>nil}
      when 'Rz'
        # {"type"=>"Rz", "theta"=>"pi/2", "controls"=>[], "targets"=>[], "if"=>nil}
      when 'Swap'
        # {"type"=>"Swap", "controls"=>[], "targets"=>[]}
      when ''
        # {"type"=>"", "targets"=>[0]}
      when 'Bloch'
        # {"type"=>"Bloch"}
      when 'Write'
        # {"type"=>"Write", "value"=>0}
      when 'Measure'
        # {"type"=>"Measure", "flag"=>""}
        measured_bits[bit] = [0, 1].sample # rubocop:disable Performance/CollectionLiteralInLoop
      when '|0>'
        # NOP
      when '|1>'
        # NOP
      when 'T'
        # NOP
      else
        raise "Unknown operation: #{each.inspect}"
      end
    end

    amplitudes = (@targets.index_with { [rand, 0] } if index == @step_index)

    { amplitudes: amplitudes, measuredBits: measured_bits, blochVectors: {} }
  end
  # rubocop:enable Metrics/MethodLength
  # rubocop:enable Metrics/CyclomaticComplexity
  # rubocop:enable Metrics/AbcSize
end
