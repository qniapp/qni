# frozen_string_literal: true

require 'test_helper'

class CircuitRequestsTest < ActionDispatch::IntegrationTest
  test 'circuit page renders a valid serialized circuit' do
    json = { cols: ['H'], title: '<Qni & Test>' }.to_json

    with_stubbed_layout_asset_tags do
      get circuit_path(json: json)
    end

    assert_response :success
    assert_select 'quantum-simulator'
    assert_select 'meta[property="og:description"][content=?]', '<Qni & Test>'
  end

  test 'circuit page keeps the current invalid JSON behavior' do
    assert_no_difference('Circuit.count') do
      with_stubbed_layout_asset_tags do
        get circuit_path(json: 'not-json')
      end
    end

    assert_response :success
    assert_select 'quantum-simulator'
    assert_select 'meta[property="og:description"]', count: 0
  end

  test 'circuit svg page renders a valid serialized circuit' do
    json = { cols: ['H'], title: '<Qni & Test>' }.to_json

    with_stubbed_layout_asset_tags do
      get circuit_svg_path(json: json)
    end

    assert_response :success
    assert_select 'quantum-circuit[data-json]', 1 do |elements|
      assert_equal json, elements.first['data-json']
    end
    assert_no_match '<Qni & Test>', response.body
  end

  test 'circuit svg page keeps the current invalid JSON server error behavior' do
    with_stubbed_layout_asset_tags do
      get circuit_svg_path(json: 'not-json')
    end

    assert_response :internal_server_error
    assert_match 'Invalid JSON: not-json', response.body
  end

  private

  def with_stubbed_layout_asset_tags
    ActionView::Base.class_eval do
      alias_method :__circuit_requests_test_original_javascript_include_tag, :javascript_include_tag
      alias_method :__circuit_requests_test_original_stylesheet_link_tag, :stylesheet_link_tag

      def javascript_include_tag(...)
        '<script src="/assets/application.js"></script>'.html_safe
      end

      def stylesheet_link_tag(...)
        '<link rel="stylesheet" href="/assets/application.css" />'.html_safe
      end
    end

    yield
  ensure
    ActionView::Base.class_eval do
      alias_method :javascript_include_tag, :__circuit_requests_test_original_javascript_include_tag
      alias_method :stylesheet_link_tag, :__circuit_requests_test_original_stylesheet_link_tag
      remove_method :__circuit_requests_test_original_javascript_include_tag
      remove_method :__circuit_requests_test_original_stylesheet_link_tag
    end
  end
end
