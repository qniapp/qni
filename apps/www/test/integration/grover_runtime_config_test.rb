# frozen_string_literal: true

require 'test_helper'
require 'minitest/mock'
require 'stringio'

class GroverRuntimeConfigTest < ActionDispatch::IntegrationTest
  test 'grover runtime config stays centralized' do
    config = Rails.configuration.x.grover

    assert_not_nil config
    assert_equal ENV['GROVER_ENABLED_IN_TEST'] == '1', config.enabled_in_test
    expected_executable_path = ENV['GROVER_EXECUTABLE_PATH'].presence || ENV['PUPPETEER_EXECUTABLE_PATH'].presence

    if expected_executable_path
      assert_equal expected_executable_path, config.executable_path
    else
      assert_nil config.executable_path
    end
    assert_equal(
      ENV['GROVER_NO_SANDBOX'].present? ? ['--no-sandbox'] : [],
      config.launch_args
    )
  end

  test 'shared circuit page still renders when social image generation fails' do
    config = Rails.configuration.x.grover
    original_enabled_in_test = config.enabled_in_test
    config.enabled_in_test = true
    output = StringIO.new
    logger = ActiveSupport::TaggedLogging.new(ActiveSupport::Logger.new(output))
    circuit = Circuit.new(json: '{"cols":["H"],"title":"Grover hardening"}')

    with_stubbed_layout_asset_tags do
      circuit.stub(:generate_social_image, ->(*) { raise Grover::DependencyError, 'missing browser' }) do
        Circuit.stub(:find_or_create_by, circuit) do
          Rails.stub(:logger, logger) do
            get circuit_path(json: circuit.json)
          end
        end
      end
    end

    assert_response :success
    assert_select 'quantum-simulator'
    assert_select 'meta[property="og:image"]', count: 0
    assert_match 'Circuit social image generation failed', output.string
    assert_match 'circuit_id=new', output.string
    assert_match "env=#{Rails.env}", output.string
    assert_match 'error_class=Grover::DependencyError', output.string
    assert_match 'error_message=missing browser', output.string
  ensure
    config.enabled_in_test = original_enabled_in_test
  end

  private

  def with_stubbed_layout_asset_tags
    ActionView::Base.class_eval do
      alias_method :__grover_test_original_javascript_include_tag, :javascript_include_tag
      alias_method :__grover_test_original_stylesheet_link_tag, :stylesheet_link_tag

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
      alias_method :javascript_include_tag, :__grover_test_original_javascript_include_tag
      alias_method :stylesheet_link_tag, :__grover_test_original_stylesheet_link_tag
      remove_method :__grover_test_original_javascript_include_tag
      remove_method :__grover_test_original_stylesheet_link_tag
    end
  end
end
