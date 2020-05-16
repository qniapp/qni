register 'a' => 4
label '0x1', '0x2', '0x4', '0x8'

block 'prepare' do
  write 0 => 1, 1 => 0, 2 => 0, 3 => 0
  h 2
  phase 2 => 'π/4'
end

block 'increment' do
  cnot [0, 1, 2] => 3
  cnot [0, 1] => 2
  cnot 0 => 1
  x 0
end

block 'decrement' do
  x 0
  cnot 0 => 1
  cnot [0, 1] => 2
  cnot [0, 1, 2] => 3
end
