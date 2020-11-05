label '0x1'
write 0

block 'RNOT' do
  h
  phase 0 => '-π/2'
  h
end

block 'RNOT' do
  h
  phase 0 => '-π/2'
  h
end

block 'Built-in RNOT' do
  rnot 0
  rnot 0
end
