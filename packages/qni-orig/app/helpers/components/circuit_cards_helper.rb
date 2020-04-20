module Components::CircuitCardsHelper
  def circuit_card(*options, &block)
    render 'components/circuit_card', *options, &block
  end
end
