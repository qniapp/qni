module Components::SimulatorHelper
  def simulator(*options, &block)
    render 'components/simulator', *options, &block
  end

  def simulator_wrapper(*options, &block)
    render 'components/simulator_wrapper', *options, &block
  end
end
