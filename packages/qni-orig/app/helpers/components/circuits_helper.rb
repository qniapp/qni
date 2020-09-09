module Components::CircuitsHelper
  def circuit_thumbnail(*options)
    render 'components/circuits/circuit_thumbnail', *options
  end

  # Circuit blocks
  def circuit_block(*options, &block)
    render 'components/circuits/circuit_block', *options, &block
  end

  def circuit_block_divider(*options, &block)
    render 'components/circuits/circuit_block_divider', *options, &block
  end

  def circuit_register_group(&block)
    render 'components/circuits/circuit_register_group', &block
  end

  def circuit_register_group_span(*options, &block)
    render 'components/circuits/circuit_register_group_span', *options, &block
  end

  def circuit_breakpoint(*options)
    render 'components/circuits/circuit_breakpoint', *options
  end

  # Labels
  def register_label(*options)
    render 'components/circuits/register_label', *options
  end

  def register_label_span(*options)
    render 'components/circuits/register_label_span', *options
  end
end
