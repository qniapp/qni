module MenuHelper
  def menu_item_group(&block)
    render 'menu_item_group', &block
  end
end
