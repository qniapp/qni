module Components::SimulatorHelper
  def simulator_wrapper(*options, &block)
    render 'components/simulator_wrapper', *options, &block
  end
end
