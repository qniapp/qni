import cirq
import io,sys
import numpy as np
#import qsimcirq
from sympy import *
from sympy.parsing.sympy_parser import parse_expr, standard_transformations, implicit_multiplication_application, convert_xor
#sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from cirq.circuits import InsertStrategy

class cirqbridge:
    def __init__(self, logger):
        self.logger = logger
        return

    def lookup_measurement_label(self,_circuit_from_qni,label):
        numofdevices=0
#        print("measurement_label: lookup for ", label)
#        sys.stdout.flush()
#        print("_circuit", _circuit_from_qni)
#        sys.stdout.flush()
        counter = 0
        label_found = 0
        for _i in _circuit_from_qni:
            if label_found == 1:
                break
#            print("_i, counter ", _i, counter)
#            sys.stdout.flush()
            if _i == []:
                continue
            for _p in range(len(_i)):
                if 'flag' in _i[_p]:
                    if _i[_p]['type'] == "Measure" and _i[_p]['flag'] != label:
                        counter = counter + 1
                    elif _i[_p]['type'] == "Measure" and _i[_p]['flag'] == label:
#                        print("found flag _i[%d]" % _p,  _i[_p]['flag'])
                        label_found = 1
                        break
            sys.stdout.flush()
#        print("counter", counter)
        label='m' + str(counter)
        return label

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
#            print("circuit column", column_qni)
#            sys.stdout.flush()
            moment = []
            measurement_moment.append([])
            if len(column_qni)==0: # null or invalid step is converted to I gate
                _c = [cirq.I(qubits[0])]
                moment.append(_c)
            for circuit_qni in column_qni:
                if circuit_qni['type'] == u'H':
                    if "if" in circuit_qni: # classical control
                        targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                        label=self.lookup_measurement_label(_circuit_from_qni, circuit_qni['if'])
                        _c=[cirq.H(index).with_classical_controls(label) for index in targetqubits]
                    else:
                        targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                        if not "controls" in circuit_qni:
                            _c=[cirq.H(index) for index in targetqubits]
                        else:
                            controledqubits=[ qubits[index] for index in circuit_qni['controls'] ]
                            _c=[ cirq.ControlledOperation(controledqubits, cirq.H(index)) for index in targetqubits ]
                elif circuit_qni['type'] == u'X':
                    if "if" in circuit_qni: # classical control
                        targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                        label=self.lookup_measurement_label(_circuit_from_qni, circuit_qni['if'])
                        _c=[cirq.X(index).with_classical_controls(label) for index in targetqubits]
                    else:
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
                elif circuit_qni['type'] == u'•':
                    if "controls" in circuit_qni:
#                        print("control is not supported for CZ gate", circuit_qni['type'])
#                        sys.stdout.flush()
                        exit(1)
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    if len(targetqubits) == 2:
                        _c = [ cirq.CZ(qubits[circuit_qni['targets'][0]], qubits[circuit_qni['targets'][1]]) ]
                    elif len(targetqubits) < 2:
#                        print("the number of target qubits must be larger than 2")
#                        sys.stdout.flush()
                        exit(1)
                    else:
                        # we regard the first and the second qubit as the target qubits,
                        # and others are controlled qubits.
                        controledqubits = []
                        for _i in range(len(circuit_qni['targets'])-2):
                            controledqubits.append(qubits[circuit_qni['targets'][_i+2]])
                        sys.stdout.flush()
                        _c = [ cirq.ControlledOperation(controledqubits, cirq.CZ(qubits[circuit_qni['targets'][0]], qubits[circuit_qni['targets'][1]])) ]
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
                    _c = []
                    _c.append(cirq.SWAP(targetqubit0,targetqubit1))
                elif circuit_qni['type'] == u'Bloch':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    _c = [ cirq.ops.I(index) for index in targetqubits] # add a dummy gate to count Bloch operation as a step
                elif circuit_qni['type'] == u'':
                    pass #nop
                elif circuit_qni['type'] == u'…':
                    targetqubits=[ qubits[index] for index in circuit_qni['targets'] ]
                    _c = [ cirq.ops.I(index) for index in targetqubits] # copyed from Bloch. not sure this works
                else:
                    self.logger.fatal("unsupported gate", circuit_qni['type'])
                    sys.stdout.flush()
                    exit(1)
                for __c in _c:
                    moment.append(__c)
            c.append(moment, strategy=InsertStrategy.NEW_THEN_INLINE)
            _current_index = _current_index + 1
#        print(c)
#        sys.stdout.flush()
        return c, measurement_moment

    def run_circuit_until_step_index(self, c, measurement_moment, until, steps):
#        print("run_circuit_until_step_index")
#        print("circuit:")
#        print(c)
#        sys.stdout.flush()
#        print("until (corrected):", until)
#        sys.stdout.flush()
#        print("steps(len):", len(steps))
#        sys.stdout.flush()
#        print("steps:", steps)
#        sys.stdout.flush()
        cirq_simulator = cirq.Simulator()
        _data = []
        counter = -1
        sleep_flag = 0 # we need padding for |1> because implimented as R + X
        for _counter, step in enumerate(cirq_simulator.simulate_moment_steps(c)):
            if sleep_flag == 0:
                counter = counter + 1
            dic = {}
            dic[':blochVectors']={}
            dic[':measuredBits'] = {}
            if sleep_flag == 0:
                for _d in steps[counter]:
                    if 'type' in _d:
                        if _d['type'] == u'|1>':
                            sleep_flag = 1
            else:
                sleep_flag = 0
            if sleep_flag == 1:
                continue

#            print("current step[%d]" % counter, steps[counter])
#            sys.stdout.flush()
            if steps[counter] == []:
                pass
            else:
                bloch_index = -1
                for _bloch_index in range(len(steps[counter])):
                    if steps[counter][_bloch_index]['type'] == 'Bloch':
                        bloch_index = _bloch_index
#                print("bloch_index ", bloch_index)
#                sys.stdout.flush()
                if bloch_index != -1:
                    for _bloch_target in steps[counter][bloch_index]['targets']:
                        blochxyz=cirq.qis.bloch_vector_from_state_vector(step.state_vector(),_bloch_target)
                        dic[':blochVectors'][_bloch_target] = blochxyz
#                        print("bloch sphere: ", blochxyz) 
#                        sys.stdout.flush()
            if counter == until:
                dic[':amplitude'] = step.state_vector()
#                print("amplitudes: ", step.state_vector())
#                sys.stdout.flush()
            _data.append(dic)
        if len(step.measurements) != 0:
            for i in range(len(measurement_moment)):
                if len(measurement_moment[i]) !=0:
#                    print("searching key", measurement_moment[i])
                    for k in range(len(measurement_moment[i])):
                        for j in range(len(measurement_moment[i][k])):
                            _key = measurement_moment[i][k][j][0]
                            _qubit = measurement_moment[i][k][j][1]
                            _step = i
                            if _key not in step.measurements:
                                break
                            _value= step.measurements[_key][0]
#                            print("step: ", _step, "key:", _key, "target qubit", _qubit, "value ", _value)
#                            sys.stdout.flush()
                            _data[i][':measuredBits'][_qubit] = _value
#        print("_data ", _data)
#        sys.stdout.flush()
        return _data

