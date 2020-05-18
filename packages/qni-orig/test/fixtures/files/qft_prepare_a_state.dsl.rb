register 'qin' => 4
label '0x1', '0x2', '0x4', '0x8'

block 'write freq' do
  write 0
  h 0
  cnot 0 => [1, 2, 3]
  x 1
  cnot 1 => 0
  x 1
end

block 'invQFT' do
  swap 0, 3
  swap 1, 2
  h 0
  cphase [0, 1] => 'π/2'
  cphase [0, 2] => 'π/4'
  cphase [0, 3] => 'π/8'
  h 1
  cphase [1, 2] => 'π/2'
  cphase [1, 3] => 'π/4'
  h 2
  cphase [2, 3] => 'π/2'
  h 3
end
