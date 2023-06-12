# frozen_string_literal: true

require 'test_helper'

class BackendControllerTest < ActionDispatch::IntegrationTest
  test 'should get show' do
    get backend_url(format: :json, backend: 'cirq')
    assert_response :success
  end
end
