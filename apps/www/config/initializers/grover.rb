# frozen_string_literal: true

runtime_config = ActiveSupport::OrderedOptions.new
runtime_config.enabled_in_test = ENV['GROVER_ENABLED_IN_TEST'] == '1'
runtime_config.executable_path = ENV['GROVER_EXECUTABLE_PATH'].presence || ENV['PUPPETEER_EXECUTABLE_PATH'].presence
runtime_config.launch_args = []
runtime_config.launch_args << '--no-sandbox' if ENV['GROVER_NO_SANDBOX'].present?

Rails.application.config.x.grover = runtime_config
