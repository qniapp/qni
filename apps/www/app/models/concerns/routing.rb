# frozen_string_literal: true

module Routing
  extend ActiveSupport::Concern

  included do
    include Rails.application.routes.url_helpers
  end

  def default_url_options
    if Rails.env.production?
      { host: 'qniapp.net' }
    else
      { host: 'localhost', port: 3000 }
    end
  end
end
