# frozen_string_literal: true

Rails.application.configure do
  config.serviceworker.routes.draw do
    match '/serviceworker.js' => 'serviceworker.js', pack: true
    match '/manifest.json'
  end
end
