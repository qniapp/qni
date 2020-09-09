require 'test_helper'

require 'qni/dsl'

class DslTest
  class LabelsTest < ActiveSupport::TestCase
    test "register 'reg1', 'reg2', 'reg3', ..." do
      dsl = Qni::Dsl.load <<~DSL
        register 'Input 1', 'Input 2', 'Output'
      DSL

      assert_equal(['Input 1', 'Input 2', 'Output'], dsl.registers)
    end

    test "register 'reg1' => 2, 'reg2' => 3, ..." do
      dsl = Qni::Dsl.load <<~DSL
        register 'a' => 4, 'b' => 2
      DSL

      assert_equal({ 'a' => 4, 'b' => 2 }, dsl.registers)
    end

    test "label '0x1', '0x2', '0x4', ..." do
      dsl = Qni::Dsl.load <<~DSL
        label '0x1', '0x2', '0x4'
      DSL

      assert_equal %w[0x1 0x2 0x4], dsl.labels
    end
  end

  class CodeBlocksTest < ActiveSupport::TestCase
    test 'block' do
      dsl = Qni::Dsl.load <<~DSL
        block 'RNOT' do
          h 0
          phase 0 => '-π/2'
          h 0
        end
      DSL

      assert_equal [:block_start, 'RNOT'], dsl[0]
      assert_equal [:h, [0]], dsl[1]
      assert_equal [:phase, { 0 => '-π/2' }], dsl[2]
      assert_equal [:h, [0]], dsl[3]
      assert_equal [:block_end, 4], dsl[4]
    end
  end

  class ReadAndWriteTest < ActiveSupport::TestCase
    test 'write 0' do
      dsl = Qni::Dsl.load <<~DSL
        write 0
      DSL

      assert_equal [:write_all, 0], dsl[0]
    end

    test 'write 0 => 1, 1 => 0, ...' do
      dsl = Qni::Dsl.load <<~DSL
        write 0 => 1, 1 => 0, 2 => 0
      DSL

      assert_equal [:write, { 0 => 1, 1 => 0, 2 => 0 }], dsl[0]
    end

    test 'read 0, 1' do
      dsl = Qni::Dsl.load <<~DSL
        read 0, 1
      DSL

      assert_equal [:read, [0, 1]], dsl[0]
    end

    test "read 0, 1, set: 'alice_h'" do
      dsl = Qni::Dsl.load <<~DSL
        read 0, 1, set: 'alice_h'
      DSL

      assert_equal [:read, [0, 1], { set: 'alice_h' }], dsl[0]
    end
  end

  class SingleQubitGateTest < ActiveSupport::TestCase
    test 'h' do
      dsl = Qni::Dsl.load <<~DSL
        h
      DSL

      assert_equal [:h_all], dsl[0]
    end

    test 'h 0, 1, ...' do
      dsl = Qni::Dsl.load <<~DSL
        h 0, 1, 2
      DSL

      assert_equal [:h, [0, 1, 2]], dsl[0]
    end

    test 'h 0, 1, disabled: true' do
      dsl = Qni::Dsl.load <<~DSL
        h 0, 1, disabled: true
      DSL

      assert_equal [:h, [0, 1], { disabled: true }], dsl[0]
    end

    test "h 1, label: 'if alice_v'" do
      dsl = Qni::Dsl.load <<~DSL
        h 1, if: 'alice_h'
      DSL

      assert_equal [:h, [1], { if: 'alice_h' }], dsl[0]
    end

    test 'x' do
      dsl = Qni::Dsl.load <<~DSL
        x
      DSL

      assert_equal [:x_all], dsl[0]
    end

    test 'x 0, 1, ...' do
      dsl = Qni::Dsl.load <<~DSL
        x 0, 1, 2
      DSL

      assert_equal [:x, [0, 1, 2]], dsl[0]
    end

    test 'x 0, 1, disabled: true' do
      dsl = Qni::Dsl.load <<~DSL
        x 0, 1, disabled: true
      DSL

      assert_equal [:x, [0, 1], { disabled: true }], dsl[0]
    end

    test "x 1, label: 'if alice_v'" do
      dsl = Qni::Dsl.load <<~DSL
        x 1, if: 'alice_v'
      DSL

      assert_equal [:x, [1], { if: 'alice_v' }], dsl[0]
    end

    test 'rnot' do
      dsl = Qni::Dsl.load <<~DSL
        rnot 0, 1
      DSL

      assert_equal [:rnot, [0, 1]], dsl[0]
    end

    test 'rnot 0, 1, ...' do
      dsl = Qni::Dsl.load <<~DSL
        rnot 0, 1, 2
      DSL

      assert_equal [:rnot, [0, 1, 2]], dsl[0]
    end

    test 'rnot 0, 1, disabled: true' do
      dsl = Qni::Dsl.load <<~DSL
        rnot 0, 1, disabled: true
      DSL

      assert_equal [:rnot, [0, 1], { disabled: true }], dsl[0]
    end

    test "rnot 1, label: 'if alice_rnot'" do
      dsl = Qni::Dsl.load <<~DSL
        rnot 1, label: 'if alice_rnot'
      DSL

      assert_equal [:rnot, [1], { label: 'if alice_rnot' }], dsl[0]
    end

    test "phase 'π/2'" do
      dsl = Qni::Dsl.load <<~DSL
        phase 'π/2'
      DSL

      assert_equal [:phase_all, { theta: 'π/2' }], dsl[0]
    end

    test "phase 0 => 'π/2', 1 => '-π/2'" do
      dsl = Qni::Dsl.load <<~DSL
        phase 0 => 'π/2', 1 => '-π/2'
      DSL

      assert_equal [:phase, { 0 => 'π/2', 1 => '-π/2' }], dsl[0]
    end

    test "phase 0 => 'π/2', disabled: true" do
      dsl = Qni::Dsl.load <<~DSL
        phase 0 => 'π/2', disabled: true
      DSL

      assert_equal [:phase, { 0 => 'π/2' }, { disabled: true }], dsl[0]
    end

    test "phase 0 => 'π/2', label: 'if alice_p'" do
      dsl = Qni::Dsl.load <<~DSL
        phase 0 => 'π/2', label: 'if alice_p'
      DSL

      assert_equal [:phase, { 0 => 'π/2' }, { label: 'if alice_p' }], dsl[0]
    end
  end

  class MultiQubitGateTest < ActiveSupport::TestCase
    test 'swap 1, 2' do
      dsl = Qni::Dsl.load <<~DSL
        swap 1, 2
      DSL

      assert_equal [:swap, [1, 2]], dsl[0]
    end

    test 'cnot 0 => 1' do
      dsl = Qni::Dsl.load <<~DSL
        cnot 0 => 1
      DSL

      assert_equal [:cnot, { 0 => 1 }], dsl[0]
    end

    test 'cnot [0, 1] => 2' do
      dsl = Qni::Dsl.load <<~DSL
        cnot [0, 1] => 2
      DSL

      assert_equal [:ccnot, { [0, 1] => 2 }], dsl[0]
    end

    test "cphase [0, 1, 2] => 'π/4'" do
      dsl = Qni::Dsl.load <<~DSL
        cphase [0, 1, 2] => 'π/4'
      DSL

      assert_equal [:cphase, { [0, 1, 2] => 'π/4' }], dsl[0]
    end

    test 'cswap 2 => [0, 1]' do
      dsl = Qni::Dsl.load <<~DSL
        cswap 2 => [0, 1]
      DSL

      assert_equal [:cswap, { 2 => [0, 1] }], dsl[0]
    end
  end

  class WiresTest < ActiveSupport::TestCase
    test 'down 1, 2' do
      dsl = Qni::Dsl.load <<~DSL
        down 1, 2
      DSL

      assert_equal [:down, [1, 2]], dsl[0]
    end
  end
end
