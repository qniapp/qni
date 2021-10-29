# frozen_string_literal: true

# Takes and validates JSON parameters
module Jsonnable
  extend ActiveSupport::Concern

  def valid_json?(json)
    JSON.parse(json)
    true
  rescue JSON::ParserError
    false
  end
end
