# frozen_string_literal: true

Rails.application.config.assets.excluded_paths.concat([
  Rails.root.join('app/assets/stylesheets'),
  Rails.root.join('app/assets/javascripts')
])
