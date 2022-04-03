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
from cirq.circuits import InsertStrategy

class cirqbridge:
    def __init__(self):
        return

    def build_circuit(self,numofqubits,_circuit_from_qni,step_index):
#        print("build_circuit")
#        sys.stdout.flush()
        transformations = (standard_transformations + (implicit_multiplication_application,) + (convert_xor,))
        circuit_from_qni = []
        for a in _circuit_from_qni:
            if len(a) != 0:
                circuit_from_qni.append(a)
        qubits = cirq.LineQubit.range(numofqubits)
        c = cirq.Circuit()
        i = 0
        m = 0
        measurement = []
        is_measured = false
        _current_index = 0
        for column_qni in circuit_from_qni:
#            print("circuit column", i, column_qni)
#            sys.stdout.flush()
            i = i + 1
            j = 0
            moment = []
            for circuit_qni in column_qni:
                j = j + 1
                if circuit_qni['type'] == u'H':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c=[cirq.H(index) for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c=[ cirq.ControlledOperation(controledqubits, cirq.H(index)) for index in targetqubits ]
                elif circuit_qni['type'] == u'X':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c=[ cirq.X(index) for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c=[ cirq.ControlledOperation(controledqubits, cirq.X(index)) for index in targetqubits ]
                elif circuit_qni['type'] == u'Y':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c=[ cirq.Y(index) for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c=[ cirq.ControlledOperation(controledqubits, cirq.Y(index)) for index in targetqubits ]
                elif circuit_qni['type'] == u'Z':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c=[cirq.Z(index) for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c=[ cirq.ControlledOperation(controledqubits, cirq.Z(index)) for index in targetqubits ]
                elif circuit_qni['type'] == u'Rx':
                    _angle = circuit_qni['angle'].replace(u'π','pi')
                    expr = parse_expr(_angle, transformations=transformations)
                    angle = float(expr.evalf())
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c=[ cirq.rx(angle).on(index) for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c=[ cirq.ControlledOperation(controledqubits, cirq.rx(angle).on(index)) for index in targetqubits ]
                elif circuit_qni['type'] == u'Ry':
                    _angle = circuit_qni['angle'].replace(u'π','pi')
                    expr = parse_expr(_angle, transformations=transformations)
                    angle = float(expr.evalf())
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c= [ cirq.ry(angle).on(index) for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c =[ cirq.ControlledOperation(controledqubits, cirq.ry(angle).on(index)) for index in targetqubits ]
                elif circuit_qni['type'] == u'Rz':
                    _angle = circuit_qni['angle'].replace(u'π','pi')
                    expr = parse_expr(_angle, transformations=transformations)
                    angle = float(expr.evalf())
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c = [ cirq.rz(angle).on(index) for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c = [ cirq.ControlledOperation(controledqubits, cirq.rz(angle).on(index)) for index in targetqubits ]
                elif circuit_qni['type'] == u'P':
                    _angle = circuit_qni['angle'].replace(u'π','pi') + '/ pi'
                    expr = parse_expr(_angle, transformations=transformations)
                    angle = float(expr.evalf())
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c = [ cirq.ZPowGate(exponent=angle).on(index) for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c = [ cirq.ControlledOperation(controledqubits, cirq.ZPowGate(exponent=angle).on(index)) for index in targetqubits ]
                elif circuit_qni['type'] == u'T':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c = [ cirq.Z(index)**0.25 for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c = [ cirq.ControlledOperation(controledqubits, cirq.Z(index)**0.25) for index in targetqubits ]
                elif circuit_qni['type'] == u'X^':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if not "controls" in circuit_qni:
                        _c = [ cirq.X(index)**0.5 for index in targetqubits]
                    else:
                        controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                        _c = [ cirq.ControlledOperation(controledqubits, cirq.X(index)**0.5) for index in targetqubits ]
                elif circuit_qni['type'] == u'|0>':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    _c = [ cirq.ops.reset(index) for index in targetqubits]
                elif circuit_qni['type'] == u'|1>':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    _c = [ cirq.ops.reset(index) for index in targetqubits]
                    _c.append([ cirq.X(index) for index in targetqubits])
                elif circuit_qni['type'] == u'Measure':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    _c = [ cirq.measure(index, key = 'm' + str(m + i))  for i, index in enumerate(targetqubits)]
                    m = m + len(targetqubits)
                    is_measured=true
                elif circuit_qni['type'] == u'Swap':
                    targetqubit0=qubits[circuit_qni['targets'][0]]
                    targetqubit1=qubits[circuit_qni['targets'][1]]
                    _c = (cirq.SWAP(targetqubit0,targetqubit1))
                elif circuit_qni['type'] == u'':
                    pass #nop
                else:
                    print("unsupported gate", circuit_qni['type'])
                    sys.stdout.flush()
                    exit(1)
#                print(_c)
                for __c in _c:
                    moment.append(__c)
            c.append(moment, strategy=InsertStrategy.NEW_THEN_INLINE)
#        sys.stdout.flush()
        return c
    def run_circuit_until_step_index(self, c, until):
        print("run_circuit_until_step_index")
        print("circuit:")
        print(c)
#        print("until (corrected):", until)
#        sys.stdout.flush()
        cirq_simulator = cirq.Simulator()
        counter = 0 
        _data = []
        for i, step in enumerate(cirq_simulator.simulate_moment_steps(c)):
#            print('state at step %s' % np.around(step.state_vector(), 3))
#            print('state at measurement %s' % step.measurements)
            dic = {}
            dic[':measuredBits'] = {}
            dic[':blochVectors'] = {}
            _data.append(dic)
            if counter >= until:
                dic[':amplitude'] = step.state_vector()
                break
            counter = counter + 1;
        sys.stdout.flush()
        return _data

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
    cirq_circuit = cirqbridge.build_circuit(@qubit_count, @steps, @step_index)
    # @step_index must be incremented when we add a gate, which intialize a qubit to |1>.
    # Note: Initalize to |1> means initalize to |0> and follwed by negation
    _step_index = 0
    i = 0 
    for a in @steps do
      for b in a do
        if b['type'] == '|1>' then
          _step_index = _step_index + 1
        end
      end
      if i >= @step_index then
        break
      end
      _step_index = _step_index + 1
      i = i + 1
    end
    _result_list = cirqbridge.run_circuit_until_step_index(cirq_circuit, _step_index).to_a
    result_list = []
    for var in _result_list do
        hash = {}
        a = var.to_h
        hash[:measuredBits]=a[":measuredBits"]
        hash[:blochVectors]=a[":blochVectors"]
        result_list.push(hash)
    end
    _amplitudes=_result_list[_step_index][':amplitude']
    amplitudes = {}
    for num in 0.._amplitudes.size-1 do
        amplitudes.store(num,Array[_amplitudes[num].real.to_f,_amplitudes[num].imag.to_f])
    end
    result_list[_step_index][:amplitudes]=amplitudes
    result_list
  end
end
