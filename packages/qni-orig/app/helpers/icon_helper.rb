# frozen_string_literal: true

module IconHelper
  def minus_icon
    render 'icons/minus'
  end

  def arrow_right_icon
    render 'icons/arrow_right'
  end

  def exclamation_circle_icon
    render 'icons/exclamation_circle_icon'
  end

  def share_icon(options = { class: 'h-5 w-5' })
    render 'icons/share', options: options
  end

  def outline_x_icon
    render 'icons/outline_x'
  end

  def twitter_icon
    render 'icons/twitter'
  end
end
