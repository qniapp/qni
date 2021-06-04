module IconsHelper
  def hadamard_icon
    render 'components/icons/hadamard'
  end

  def plus_icon
    render 'components/icons/plus'
  end

  def phi_icon
    render 'components/icons/phi'
  end

  def swap_icon(*options)
    render 'components/icons/swap', *options
  end

  def reload_icon
    render 'components/icons/reload'
  end
end
