module IconsHelper
  def minus_icon
    render 'components/icons/minus'
  end

  def arrow_right_icon
    render 'components/icons/arrow_right'
  end

  def hadamard_icon(*options)
    render 'components/icons/hadamard', *options
  end

  def plus_icon(*options)
    render 'components/icons/plus', *options
  end

  def y_icon(*options)
    render 'components/icons/y', *options
  end

  def z_icon(*options)
    render 'components/icons/z', *options
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

  def rx_icon(*options)
    render 'components/icons/rx', *options
  end

  def ry_icon(*options)
    render 'components/icons/ry', *options
  end

  def rz_icon(*options)
    render 'components/icons/rz', *options
  end

  def reload_icon
    render 'components/icons/reload'
  end

  def exclamation_circle_icon
    render 'components/icons/exclamation_circle_icon'
  end
end
