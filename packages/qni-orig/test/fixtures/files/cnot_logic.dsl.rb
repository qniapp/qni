register 'a', 'b', 'c'
label '0x1', '0x1', '0x1'

write 2 => 0
x 2
read 2

write 1 => 1
write 2 => 0
cnot 1 => 2
read 1
read 2

write 0 => 1, 1 => 1, 2 => 0
cnot [0, 1] => 2
read 0, 1, 2
