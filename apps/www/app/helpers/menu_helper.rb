module MenuHelper
  def menu
    render 'menu'
  end

  def menu_item_group(&block)
    render 'menu/item_group', &block
  end

  def menu_item_action(options)
    render 'menu/item_action', options: options
  end

  def menu_item_link(options)
    render 'menu/item_link', options: options
  end
end
