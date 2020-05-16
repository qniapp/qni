register 'signal' => 4
label '0x1', '0x2', '0x4', '0x8'

block 'prepare' do
  write 0
  h
  phase 0 => 'π'
end

block 'QFT' do
  h 3
  cphase [2, 3] => '-π/2'
  cphase [1, 3] => '-π/4'
  cphase [0, 3] => '-π/8'
  h 2
  cphase [1, 2] => '-π/2'
  cphase [0, 2] => '-π/4'
  h 1
  cphase [0, 1] => '-π/2'
  h 0
  swap 0, 3
  swap 1, 2
end
