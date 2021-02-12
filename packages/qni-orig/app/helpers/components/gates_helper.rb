module Components::GatesHelper
  include ComponentsHelper

  def hadamard_gate(*options, &block)
    component 'gates/hadamard_gate', *options, &block
  end

  def not_gate(*options, &block)
    component 'gates/not_gate', *options, &block
  end

  def phase_gate(*options, &block)
    component 'gates/phase_gate', *options, &block
  end

  def control_gate(*options, &block)
    component 'gates/control_gate', *options, &block
  end

  def root_not_gate(*options, &block)
    component 'gates/root_not_gate', *options, &block
  end
end
