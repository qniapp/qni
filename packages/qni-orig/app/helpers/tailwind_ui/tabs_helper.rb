module TailwindUi::TabsHelper
  def pill(*options, &block)
    render 'tailwind_ui/tabs/pill', *options, &block
  end
end
