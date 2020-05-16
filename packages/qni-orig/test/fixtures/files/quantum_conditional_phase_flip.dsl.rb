register 'a' => 3, 'b' => 2
label '0x1', '0x2', '0x4', '0x1', '0x2'

block 'a = 0, 1, 2, 3' do
  write 0 => 0, 1 => 0, 2 => 0
  h 0, 1
end

block 'b = 1, 3' do
  write 3 => 1, 4 => 0
  h 4
end

block 'a -= 3' do
  x 1
  cnot 1 => 2
  x 0
  cnot 0 => 1
  cnot [0, 1] => 2
end

block 'flip if (a < 0 && b == 1)' do
  x 4
  cphase [2, 3, 4] => 'π'
  x 4
end

block 'a += 3' do
  cnot [0, 1] => 2
  cnot 0 => 1
  x 0
  cnot 1 => 2
  x 1
end
