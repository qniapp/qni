# frozen_string_literal: true

module IconHelper
  def icon(name, options = { class: 'h-5 w-5' })
    render "icon/#{name}", options: options
  end
end
