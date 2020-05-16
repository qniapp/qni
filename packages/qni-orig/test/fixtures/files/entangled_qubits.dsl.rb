register 'a', 'b'
label '0x1', '0x1'

block 'entangle' do
  write 0
  h 0
  cnot 0 => 1
end

read 0 => 1
read 1 => 1
