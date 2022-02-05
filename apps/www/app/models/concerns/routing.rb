# frozen_string_literal: true

module Routing
  extend ActiveSupport::Concern

  included { include Rails.application.routes.url_helpers }

  def default_url_options
    Rails.env.production? ? { host: 'qniapp.net' } : { host: 'localhost', port: 3000 }
  end
end
