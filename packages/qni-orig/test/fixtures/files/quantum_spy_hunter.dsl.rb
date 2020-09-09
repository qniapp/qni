register '👩Alice', '😈Eve', '👦🏻Bob'
label '0x1', '0x1', '0x1'

block 'get two random bits' do
  write 0 => 0
  h 0
  read 0, set: 'alice_h'
  write 0 => 0
  h 0
  read 0, set: 'alice_v'
end

write 0 => 0

block 'set value' do
  x 0, if: 'alice_v'
end

block 'apply H' do
  h 0, disabled: true, if: 'alice_h'
end

down 0

block '🕶spy' do
  h 1
  read 1, set: 'eve_v'
  write 1 => 0
  x 1, if: 'eve_v'
  h 1
end

write 2 => 0
h 2
read 2, set: 'bob_h'

down 1

block 'apply H' do
  h 2, disabled: true, if: 'bob_h'
end

block 'readout' do
  read 2
end
