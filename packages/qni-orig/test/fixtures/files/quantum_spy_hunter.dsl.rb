register '👩Alice', '😈Eve', '👦🏻Bob'
label '0x1', '0x1', '0x1'

block 'get two random bits' do
  write 0 => 0
  h 0
  read 0 => 0, label: 'alice_h'
  write 0 => 0
  h 0
  read 0 => 1, label: 'alice_v'
end

write 0 => 0

block 'set value' do
  x 0, label: 'if alice_v'
end

block 'apply H' do
  h 0, disabled: true, label: 'if alice_h'
end

down 0

block '🕶spy' do
  h 1
  read 1 => 1, label: 'eve_v'
  write 1 => 0
  x 1, label: 'if eve_v'
  h 1
end

write 2 => 0
h 2
read 2 => 0, label: 'bob_h'

down 1

block 'apply H' do
  h 2, disabled: true, label: 'if bob_h'
end

block 'readout' do
  read 2 => 0
end
