register 'register' => 4
label '0x1', '0x2', '0x4', '0x8'

write 0

h

5.times do
  x
  cphase [0, 1, 2, 3] => 'π'
  x
  x 1, 2, 3
  cphase [0, 1, 2, 3] => 'π'
  x 1, 2, 3
  x 0, 2, 3
  cphase [0, 1, 2, 3] => 'π'
  x 0, 2, 3
  h
  x
  cphase [0, 1, 2, 3] => 'π'
  x
  h
end
