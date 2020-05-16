register 'a' => 3, 'b' => 3
label '0x1', '0x2', '0x4', '0x1', '0x2', '0x4'

block 'a = (1, 5)' do
  write 0 => 1, 1 => 0, 2 => 0
  h 2
end

block 'b = (1, 3)' do
  write 3 => 1, 4 => 0, 5 => 0
  h 4
  phase 4 => 'π/4'
end

block 'a -= 3' do
  x 1
  cnot 1 => 2
  x 0
  cnot 0 => 1
  cnot [0, 1] => 2
end

block 'if (a < 0) then b++' do
  cnot [2, 3, 4] => 5
  cnot [2, 3] => 4
  cnot 2 => 3
end

block 'a += 3' do
  cnot [0, 1] => 2
  cnot 0 => 1
  x 0
  cnot 1 => 2
  x 1
end
