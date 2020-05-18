import math
import sympy
from sympy.physics.quantum import TensorProduct
from sympy import sin, cos, sqrt, pi, I, Matrix, re

BRA0 = Matrix([[1, 0]])
KET0 = Matrix([[1], [0]])
BRA1 = Matrix([[0, 1]])
KET1 = Matrix([[0], [1]])

E = Matrix([[1, 0], [0, 1]])
H = Matrix([[1, 1], [1, -1]]) / sqrt(2)
X = Matrix([[0, 1], [1, 0]])


def P(theta):
    return Matrix([[1, 0], [0, cos(theta) + I * sin(theta)]])


RNOT = H * P(-pi/2) * H


def init(nqubit):
    psi = TensorProduct(*([KET0] * nqubit))
    print_psi(psi)
    return psi


def nop(psi):
    print_psi(psi)
    return psi


def h(qubits, psi):
    nqubits = int(math.log2(psi.rows))
    matrices = [E] * nqubits
    for i in qubits:
        matrices[nqubits - 1 - i] = H

    new_psi = simplify(TensorProduct(*matrices) * psi)
    print_psi(new_psi)
    return new_psi


def x(qubits, psi):
    nqubits = int(math.log2(psi.rows))
    matrices = [E] * nqubits
    for i in qubits:
        matrices[nqubits - 1 - i] = X

    new_psi = simplify(TensorProduct(*matrices) * psi)
    print_psi(new_psi)
    return new_psi


def p(targets_values, psi):
    nqubits = int(math.log2(psi.rows))
    matrices = [E] * nqubits
    for i in targets_values.keys():
        matrices[nqubits - 1 - i] = P(targets_values[i])

    new_psi = simplify(TensorProduct(*matrices) * psi)
    print_psi(new_psi)
    return new_psi


def cphase(targets, theta, psi):
    nqubits = int(math.log2(psi.rows))
    control = [E] * nqubits
    target = [E] * nqubits

    m0 = [E] * nqubits
    m1 = [E] * nqubits
    m1[nqubits - targets[-1] - 1] = P(theta) - E
    for c in targets:
        if c != targets[-1]:
            m1[nqubits - c - 1] = KET1 * BRA1
    u = TensorProduct(*m0) + TensorProduct(*m1)

    new_psi = simplify(u * psi)
    print_psi(new_psi)
    return new_psi


def CU(control, target, gate, nqubits):
    m0 = [E] * nqubits
    m1 = [E] * nqubits
    m0[nqubits - 1 - control] = KET0 * BRA0
    m1[nqubits - 1 - control] = KET1 * BRA1
    m1[nqubits - 1 - target] = gate
    return TensorProduct(*m0) + TensorProduct(*m1)


def CNOT(control, target, nqubits):
    return CU(control, target, X, nqubits)


def swap(targets, psi):
    nqubits = int(math.log2(psi.rows))

    ucnot1 = CNOT(targets[0], targets[1], nqubits)
    ucnot2 = CNOT(targets[1], targets[0], nqubits)
    uswap = ucnot1 * ucnot2 * ucnot1

    new_psi = simplify(uswap * psi)
    print_psi(new_psi)
    return new_psi


def cnot(control, targets, psi):
    nqubits = int(math.log2(psi.rows))

    m0 = [E] * nqubits
    m1 = [E] * nqubits
    m0[nqubits - 1 - control] = KET0 * BRA0
    m1[nqubits - 1 - control] = KET1 * BRA1
    for t in targets:
        m1[nqubits - 1 - t] = X
    u = TensorProduct(*m0) + TensorProduct(*m1)

    new_psi = simplify(u * psi)
    print_psi(new_psi)
    return new_psi


def ccnot(controls, target, psi):
    nqubits = int(math.log2(psi.rows))

    m0 = [E] * nqubits
    m1 = [E] * nqubits
    m1[nqubits - target - 1] = X - E
    for c in controls:
        m1[nqubits - c - 1] = KET1 * BRA1
    uccnot = TensorProduct(*m0) + TensorProduct(*m1)

    new_psi = simplify(uccnot * psi)
    print_psi(new_psi)
    return new_psi


def cccnot(controls, target, psi):
    return ccnot(controls, target, psi)


def cswap(control, targets, psi):
    nqubits = int(math.log2(psi.rows))

    ucnot1 = CNOT(targets[0], targets[1], 2)
    ucnot2 = CNOT(targets[1], targets[0], 2)
    uswap = ucnot1 * ucnot2 * ucnot1

    m0 = [E] * nqubits
    m1 = [E] * (nqubits - 1)
    m0[nqubits - 1 - control] = KET0 * BRA0
    m1[nqubits - 1 - control] = KET1 * BRA1
    m1[nqubits - 2 - targets[0]] = uswap
    ucswap = TensorProduct(*m0) + TensorProduct(*m1)

    new_psi = simplify(ucswap * psi)
    print_psi(new_psi)
    return new_psi


def rnot(qubits, psi):
    nqubits = int(math.log2(psi.rows))
    matrices = [E] * nqubits
    for i in qubits:
        matrices[nqubits - 1 - i] = RNOT

    new_psi = simplify(TensorProduct(*matrices) * psi)
    print_psi(new_psi)
    return new_psi


def write(targets, psi):
    nqubits = int(math.log2(psi.rows))
    matrices = [E] * nqubits

    for key, val in targets.items():
        m = [E] * nqubits
        if val == 0:
            m[nqubits - 1 - key] = KET0 * BRA0
        else:
            m[nqubits - 1 - key] = KET1 * BRA1
        prob = (psi.adjoint() * TensorProduct(*m) * psi)[0, 0].simplify()
        if prob == 0:
            matrices[nqubits - 1 - key] = X

    new_psi = simplify(TensorProduct(*matrices) * psi)
    print_psi(new_psi)
    return new_psi


def read(targets, psi):
    new_psi = psi.copy()
    nqubits = int(math.log2(new_psi.rows))

    for key, val in targets.items():
        matrices = [E] * nqubits
        if val == 0:
            matrices[nqubits - 1 - key] = KET0 * BRA0
        else:
            matrices[nqubits - 1 - key] = KET1 * BRA1
        prob = (new_psi.adjoint() * TensorProduct(*matrices) * new_psi)[0, 0].simplify()
        new_psi = 1/sqrt(prob) * TensorProduct(*matrices) * new_psi

    new_psi = simplify(new_psi)
    print_psi(new_psi)
    return new_psi


def down(qubits, psi):
    new_psi = psi.copy()
    nqubits = int(math.log2(psi.rows))

    for i in range(new_psi.rows):
        ss = format(i, f"0{nqubits}b")
        sb = ss[nqubits - 1 - qubits[0]]
        db = list(ss)
        if sb == '1':
            db[nqubits - 1 - qubits[0]] = '0'
            db[nqubits - 2 - qubits[0]] = '1'
        ds = ''.join(db)

        source = int(ss, 2)
        dest = int(ds, 2)
        if source < dest:
            tmp = new_psi[source]
            new_psi[dest] = tmp
            new_psi[source] = 0

    new_psi = simplify(new_psi)
    print_psi(new_psi)
    return new_psi


def simplify(psi):
    new_psi = psi.copy()
    for i in range(psi.rows):
        new_psi[i, 0] = psi[i, 0].simplify()
    return new_psi


def print_psi(vector):
    nqubits = int(math.log2(vector.rows))
    psi = []

    for i in range(vector.rows):
        v = vector[i, 0]
        ket = format(i, f"0{nqubits}b")
        psi.append(f"{v}|{ket}>")
    print("# |ψ> = " + ' + '.join(psi))

    for v in range(vector.rows):
        print(f"Magnitude (symbolic): m{v} = {sympy.Abs(vector[v, 0])}")

    for v in range(vector.rows):
        print(f"Magnitude: m{v} = {re(sympy.Abs(vector[v, 0]).n())}")

    for v in range(vector.rows):
        print(f"Relational phase (symbolic): p{v} = {sympy.arg(vector[v, 0])}")

    for v in range(vector.rows):
        print(f"Relational phase: p{v} = {float(sympy.arg(vector[v, 0])) / 3.14 * 180}")
