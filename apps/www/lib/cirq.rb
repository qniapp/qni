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

    def build_circuit(self,numofqubits,_circuit_from_qni):
#        print("build_circuit")
#        sys.stdout.flush()
        transformations = (standard_transformations + (implicit_multiplication_application,) + (convert_xor,))
        circuit_from_qni = []
        for a in _circuit_from_qni:
            circuit_from_qni.append(a)
            sys.stdout.flush()
        qubits = cirq.LineQubit.range(numofqubits)
        c = cirq.Circuit()
        m = 0
        measurement_moment = []
        _current_index = 0
        for column_qni in circuit_from_qni:
            #print("circuit column", i, column_qni)
            #sys.stdout.flush()
            moment = []
            measurement_moment.append([])
            if len(column_qni)==0: # null or invalid step is converted to I gate
                _c = [cirq.I(qubits[0])]
                moment.append(_c)
            for circuit_qni in column_qni:
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
                elif circuit_qni['type'] == u'X^½':
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
                    _c = [ cirq.measure(targetqubits[index], key = 'm' + str(m + index)) for index in range(len(targetqubits))]
                    __m = [ 'm' + str(m + index) for index in range(len(targetqubits))]
                    _m = [[__m[index], circuit_qni['targets'][index]] for index in range(len(targetqubits))]
                    measurement_moment[_current_index].append(_m)
                    m = m + len(targetqubits)
                elif circuit_qni['type'] == u'Swap':
                    targetqubit0=qubits[circuit_qni['targets'][0]]
                    targetqubit1=qubits[circuit_qni['targets'][1]]
                    _c = (cirq.SWAP(targetqubit0,targetqubit1))
                elif circuit_qni['type'] == u'Bloch':
                    _c = [cirq.I(qubits[0])] # add a dummy gate to count Bloch operation as a step
                elif circuit_qni['type'] == u'':
                    pass #nop
                else:
                    print("unsupported gate", circuit_qni['type'])
                    sys.stdout.flush()
                    exit(1)
                for __c in _c:
                    moment.append(__c)
            c.append(moment, strategy=InsertStrategy.NEW_THEN_INLINE)
            _current_index = _current_index + 1
#        sys.stdout.flush()
        return c, measurement_moment

    def run_circuit_until_step_index(self, c, measurement_moment, until, steps):
        print("run_circuit_until_step_index")
        print("circuit:")
        print(c)
        sys.stdout.flush()
#        print("until (corrected):", until)
#        sys.stdout.flush()
#        print("steps(len):", len(steps))
#        sys.stdout.flush()
        cirq_simulator = cirq.Simulator()
        _data = []
        for counter, step in enumerate(cirq_simulator.simulate_moment_steps(c)):
            if counter == len(steps):
                break
#            print("current step from qni", counter)
#            sys.stdout.flush()
            if steps[counter] == []:
                print(steps[counter], "null step!")
                sys.stdout.flush()
                break
            print(steps[counter])
            sys.stdout.flush()
            dic = {}
            dic[':blochVectors']={}
            if steps[counter][0]['type'] == 'Bloch':
                for _bloch_target in steps[counter][0]['targets']:
                    blochxyz=cirq.qis.bloch_vector_from_state_vector(step.state_vector(),_bloch_target)
                    dic[':blochVectors'][_bloch_target] = blochxyz
            dic[':measuredBits'] = {}
            _data.append(dic)
            if counter == until:
                dic[':amplitude'] = step.state_vector()
        if len(step.measurements) == 0:
            return _data

        for i in range(len(measurement_moment)):
            if len(measurement_moment[i]) !=0:
                for j in range(len(measurement_moment[i][0])):
                    _key = measurement_moment[i][0][j][0]
                    _qubit = measurement_moment[i][0][j][1]
                    _step = i

                    sys.stdout.flush()
                    if _key not in step.measurements:
                        break
                    _value= step.measurements[_key][0]
                    print("step: ", _step, "key:", _key, "target qubit", _qubit, "value ", _value)
                    sys.stdout.flush()
                    _data[i][':measuredBits'][_qubit] = _value
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
    cirq_circuit, measurement_moment = cirqbridge.build_circuit(@qubit_count, @steps)
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
    _result_list = cirqbridge.run_circuit_until_step_index(cirq_circuit, measurement_moment, _step_index, @steps).to_a
    result_list = []
    for var in _result_list do
        hash = {}
        a = var.to_h
        hash[:measuredBits]=a[":measuredBits"].to_h
        hash[:blochVectors]={}
        for b in a[":blochVectors"].to_h do
          c = Array[b[1][0].to_f, b[1][1].to_f, b[1][2].to_f]
          hash[:blochVectors][b[0]] = c
        end
        result_list.push(hash)
    end
    _amplitudes=_result_list[_step_index][':amplitude']
    amplitudes = {}
    for num in 0.._amplitudes.size-1 do
        amplitudes.store(num,Array[_amplitudes[num].real.to_f,_amplitudes[num].imag.to_f])
    end
    result_list[_step_index][:amplitudes]=amplitudes
    p result_list
    result_list
  end
end
