module Components::CircuitCardsHelper
  def circuit_card(*options, &block)
    render 'components/circuit_card', *options, &block
  end

  def circuit_pills
    render 'components/circuit_cards/circuit_pills'
  end

  def circuit_view(*options)
    render 'components/circuit_cards/circuit_view', *options
  end

  def circuit_code(*options)
    render 'components/circuit_cards/circuit_code', *options
  end
end
