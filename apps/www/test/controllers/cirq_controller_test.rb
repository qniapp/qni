# frozen_string_literal: true

require 'test_helper'

class CirqControllerTest < ActionDispatch::IntegrationTest
  test 'should get show' do
    get cirq_url
    assert_response :success
  end
end
