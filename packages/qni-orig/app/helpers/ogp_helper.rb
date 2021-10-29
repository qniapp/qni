# frozen_string_literal: true

module OgpHelper
  def twitter_title
    'qni-quantum.herokuapp.com (β)'
  end

  def og_description(json)
    default_title = 'No title'

    return default_title if json.blank?

    JSON.parse(json)['title'] || default_title
  end
end
