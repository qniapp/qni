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

    def build_circuit(self,numofqubits,_circuit_from_qni,step_index):
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
        _step_index = []
        _current_index = 0
        for column_qni in circuit_from_qni:
            print("circuit column", i, column_qni)
            sys.stdout.flush()
            i = i + 1
            _current_index = _current_index + len(column_qni)
            _step_index.append(_current_index + 1)
            print(_step_index)
            sys.stdout.flush()
            j = 0
            for circuit_qni in column_qni:
                j = j + 1
                #print("procssing circit ...")
                #print(column_qni)
                #sys.stdout.flush()
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
                    is_measured=true
                elif circuit_qni['type'] == u'Swap':
                    targetqubit0=qubits[circuit_qni['targets'][0]]
                    targetqubit1=qubits[circuit_qni['targets'][1]]
                    c.append(cirq.SWAP(targetqubit0,targetqubit1))
                elif circuit_qni['type'] == u'':
                    pass #nop
                else:
                    print("unsupported gate", circuit_qni['type'])
                    sys.stdout.flush()
                    exit(1)
        return (c, _step_index)

    def run_circuit_until(self,c, _step_index, until):
        print("run_circuit_until")
        print(c)
        print(until)
        print("current step", _step_index)
        print("gate number", _step_index[until])
        sys.stdout.flush()
        return

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
    cirq_circuit, _step_index =cirqbridge.build_circuit(@qubit_count, @steps, @step_index)
    wavefunction =cirqbridge.run_circuit_until(cirq_circuit, _step_index, @step_index)
    p cirq_circuit
    p _step_index
    amplitudes = {}
    measured_bits = {}
#    for num in 0..wavefunction.size-1 do
#        amplitudes.store(num,Array[wavefunction[num].real.to_f,wavefunction[num].imag.to_f])
#    end
#    p m_bits
#    print("printing cirqbridge result from Ruby\n")
#    p amplitudes
    { amplitudes: amplitudes, measuredBits: measured_bits, blochVectors: {} }
  end

end
