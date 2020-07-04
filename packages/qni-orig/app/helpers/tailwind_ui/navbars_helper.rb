module TailwindUi::NavbarsHelper
  def navbar(*options, &block)
    render 'tailwind_ui/navbars/navbar', *options, &block
  end
end
