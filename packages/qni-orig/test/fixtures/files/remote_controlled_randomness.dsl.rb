register 'a', 'b'
label '0x1', '0x1'
write 0

h 0
h 1
phase 1 => 'π/4'
h 1
cnot 0 => 1
read 0
read 1
