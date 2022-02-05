# frozen_string_literal: true

module OgpHelper
  def twitter_title
    'qniapp.net'
  end

  def og_description(json)
    default_title = 'No title'

    return default_title if json.blank?

    JSON.parse(json)['title'] || default_title
  end
end
