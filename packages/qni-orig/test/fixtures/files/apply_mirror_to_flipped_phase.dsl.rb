register 'register' => 4
label '0x1', '0x2', '0x4', '0x8'

write 0

h

4.times do
  x 2, 3
  cphase [0, 1, 2, 3] => 'π'
  x 2, 3
  h
  x
  cphase [0, 1, 2, 3] => 'π'
  x
  h
end
