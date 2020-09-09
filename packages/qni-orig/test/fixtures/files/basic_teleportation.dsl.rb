register '👩Alice', 'ep', '👦🏻Bob'
label '0x1', '0x1', '0x1'

write 1 => 0, 2 => 0

block 'entangle' do
  h 1
  cnot 1 => 2
end

write 0 => 0

block 'prep payload' do
  h 0
  phase 0 => 'π/4'
  h 0
end

block 'send' do
  cnot 0 => 1
  h 0
  read 0
  read 1
end

block 'receive' do
  cnot 1 => 2
  cphase [0, 2] => 'π'
end

block 'verify' do
  h 2
  phase 2 => '-π/4'
  h 2
  read 2
end
