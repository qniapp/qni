module Components::GatesHelper
  include ComponentsHelper

  def measure(value: nil, flag: nil, draggable: true, palette: false, &block)
    render MeasurementGateComponent.new(value: value, flag: flag, draggable: draggable, palette: palette), &block
  end
end
