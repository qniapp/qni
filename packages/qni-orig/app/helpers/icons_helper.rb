module IconsHelper
  def hadamard_icon(*options)
    render 'components/icons/hadamard', *options
  end

  def plus_icon(*options)
    render 'components/icons/plus', *options
  end

  def phi_icon(*options)
    render 'components/icons/phi', *options
  end

  def swap_icon(*options)
    render 'components/icons/swap', *options
  end

  def control_dot_icon(*options)
    render 'components/icons/control_dot', *options
  end

  def root_not_icon(*options)
    render 'components/icons/root_not', *options
  end

  def ket_icon(*options)
    render 'components/icons/ket', *options
  end

  def reload_icon
    render 'components/icons/reload'
  end

  def exclamation_circle_icon
    render 'components/icons/exclamation_circle_icon'
  end
end
