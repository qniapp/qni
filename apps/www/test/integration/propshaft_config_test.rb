# frozen_string_literal: true

require 'test_helper'

class PropshaftConfigTest < ActionDispatch::IntegrationTest
  test 'legacy sprockets manifest file is removed' do
    assert_not Rails.root.join('app/assets/config/manifest.js').exist?
  end

  test 'propshaft excludes legacy asset source directories' do
    assets_config = Rails.application.config.assets

    assert_respond_to assets_config, :excluded_paths

    excluded_paths = assets_config.excluded_paths

    assert_not_nil excluded_paths

    excluded_paths = excluded_paths.map(&:to_s)

    assert_includes excluded_paths, Rails.root.join('app/assets/stylesheets').to_s
    assert_includes excluded_paths, Rails.root.join('app/assets/javascripts').to_s
  end

  test 'root layout still references application bundles and web manifest' do
    get '/'

    assert_response :success
    assert_match(%r{application(?:-[^"/]+)?\.css}, response.body)
    assert_match(%r{application(?:-[^"/]+)?\.js}, response.body)
    assert_select 'link[rel="manifest"][href="/manifest.json"]'
  end
end
