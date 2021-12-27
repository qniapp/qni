module TailwindUi::Layout::ContainersHelper
  def container(&block)
    render 'tailwind_ui/layout/container', &block
  end
end
