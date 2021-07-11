module Components::DisplaysHelper
  include ComponentsHelper

  def bloch_display(*options)
    component 'bloch_display', *options
  end
end
