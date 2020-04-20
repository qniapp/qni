module Components::SimulatorHelper
  def simulator(&block)
    render 'components/simulator', &block
  end
end
