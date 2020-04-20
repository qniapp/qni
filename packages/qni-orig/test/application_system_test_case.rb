require 'test_helper'

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium_chrome_headless

  Capybara.add_selector(:code) do
    css { '.code' }
  end
end
