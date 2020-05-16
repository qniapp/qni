module TailwindUi::Layout::PanelsHelper
  def card(*options, &block)
    render 'tailwind_ui/panels/card', *options, &block
  end

  def card_header(&block)
    render 'tailwind_ui/panels/card/card_header', &block
  end

  def card_title(text:)
    render 'tailwind_ui/panels/card/card_title', text: text
  end

  def card_body(*options, &block)
    render 'tailwind_ui/panels/card/card_body', *options, &block
  end
end
