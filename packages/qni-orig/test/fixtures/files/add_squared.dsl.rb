register 'a' => 4, 'b' => 2
label '0x1', '0x2', '0x4', '0x8', '0x1', '0x2'

block 'prepare' do
  write 0 => 1, 1 => 0, 2 => 0, 3 => 0
  h 2
  phase 2 => 'π/4'

  write 4 => 1, 5 => 0
  h 5
  phase 5 => 'π/2'
end

block 'a *= b' do
  cnot [0, 1, 2, 4] => 3
  cnot [0, 1, 4] => 2
  cnot [0, 4] => 1
  cnot 4 => 0

  cnot [1, 2, 5] => 3
  cnot [1, 5] => 2
  cnot 5 => 1

  cnot [1, 2, 4, 5] => 3
  cnot [1, 4, 5] => 2
  cnot [4, 5] => 1

  cnot [2, 5] => 3
  cnot 5 => 2
end
