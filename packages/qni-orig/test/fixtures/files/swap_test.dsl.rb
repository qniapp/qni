register 'Input 1', 'Input 2', 'Output'
label '0x1', '0x1', '0x1'

block 'initialize' do
  write 0 => 0
  write 1 => 0
end

block 'swap test' do
  write 2 => 0
  h 2
  cswap 2 => [0, 1]
  h 2
  x 2
  read 2 => 1
end
