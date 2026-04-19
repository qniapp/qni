# frozen_string_literal: true

require 'test_helper'
require 'json'

class PwaPublicAssetsTest < ActionDispatch::IntegrationTest
  test 'public root assets remain the only pwa source-of-truth files' do
    %w[
      public/manifest.json
      public/serviceworker.js
      public/serviceworker.js.map
      public/favicon.ico
      public/icon.svg
      public/icon-192.png
      public/icon-512.png
      public/apple-touch-icon.png
      public/apple-touch-icon-precomposed.png
    ].each do |path|
      assert Rails.root.join(path).exist?, "Expected #{path} to exist"
    end

    %w[
      app/assets/javascripts/manifest.json
      app/assets/javascripts/serviceworker.js
      app/assets/javascripts/serviceworker-companion.js
    ].each do |path|
      assert_not Rails.root.join(path).exist?, "Expected #{path} to be removed"
    end
  end

  test 'app bundle no longer registers a service worker or rebuilds the worker asset' do
    app_js = Rails.root.join('app/javascript/application.js').read
    package_json = JSON.parse(Rails.root.join('package.json').read)
    scripts = package_json.fetch('scripts')

    assert_no_match(/serviceworker-companion/, app_js)
    assert_no_match(%r{app/assets/javascripts/serviceworker\.js}, scripts.fetch('build:js'))
    assert_no_match(%r{app/assets/javascripts/serviceworker\.js}, scripts.fetch('lint'))
  end

  test 'root layout still references manifest and icons from public paths' do
    get '/'

    assert_response :success
    assert_select 'link[rel="manifest"][href="/manifest.json"]'
    assert_select 'link[href="/favicon.ico"]', minimum: 1
    assert_select 'link[href="/icon.svg"]', minimum: 1
    assert_select 'link[href="/apple-touch-icon.png"]', minimum: 1
  end
end
