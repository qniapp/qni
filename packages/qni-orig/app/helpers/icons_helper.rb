module IconsHelper
  def plus_icon
    render 'components/icons/plus'
  end

  def swap_icon(*options)
    render 'components/icons/swap', *options
  end

  def reload_icon
    render 'components/icons/reload'
  end
end
