module Components::CircleNotationsHelper
  def circle_notation(*options, &block)
    render 'components/circle_notation', *options, &block
  end

  def qubit_circle_group(*options, &block)
    render 'components/circle_notations/qubit_circle_group', *options, &block
  end

  def qubit_circle_group_row(&block)
    render 'components/circle_notations/qubit_circle_group_row', &block
  end

  def qubit_circle(*options)
    render 'components/circle_notations/qubit_circle', *options
  end
end
