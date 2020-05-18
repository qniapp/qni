label '0x1', '0x2', '0x4', '0x8', '0x10', '0x20', '0x40', '0x80'

block 'prepare' do
  write 0
  h
  phase 4 => 'π'
end

block 'QFT' do
  h 7
  cphase [6, 7] => '-π/2'
  cphase [5, 7] => '-π/4'
  cphase [4, 7] => '-π/8'
  cphase [3, 7] => '-π/16'
  cphase [2, 7] => '-π/32'
  cphase [1, 7] => '-π/64'
  cphase [0, 7] => '-π/128'
  h 6
  cphase [5, 6] => '-π/2'
  cphase [4, 6] => '-π/4'
  cphase [3, 6] => '-π/8'
  cphase [2, 6] => '-π/16'
  cphase [1, 6] => '-π/32'
  cphase [0, 6] => '-π/64'
  h 5
  cphase [4, 5] => '-π/2'
  cphase [3, 5] => '-π/4'
  cphase [2, 5] => '-π/8'
  cphase [1, 5] => '-π/16'
  cphase [0, 5] => '-π/32'
  h 4
  cphase [3, 4] => '-π/2'
  cphase [2, 4] => '-π/4'
  cphase [1, 4] => '-π/8'
  cphase [0, 4] => '-π/16'
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
  swap 0, 7
  swap 1, 6
  swap 2, 5
  swap 3, 4
end
