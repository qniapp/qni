label '0x1', '0x2'
write 0

h
phase 1 => 'π/4'
cnot 0 => 1
phase 1 => '-π/4'
cnot 0 => 1
phase 0 => 'π/4'
cphase [0, 1] => 'π/2'
