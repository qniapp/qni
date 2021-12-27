require 'test_helper'

class CircuitsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get circuits_url
    assert_response :success
  end
end
