# frozen_string_literal: true

require 'test_helper'

class GroverRuntimeConfigTest < ActionDispatch::IntegrationTest
  test 'grover runtime config stays centralized' do
    config = Rails.configuration.x.grover

    assert_not_nil config
    assert_equal ENV['GROVER_ENABLED_IN_TEST'] == '1', config.enabled_in_test
    assert_equal(
      ENV['GROVER_EXECUTABLE_PATH'].presence || ENV['PUPPETEER_EXECUTABLE_PATH'].presence,
      config.executable_path
    )
    assert_equal(
      ENV['GROVER_NO_SANDBOX'].present? ? ['--no-sandbox'] : [],
      config.launch_args
    )
  end
end
