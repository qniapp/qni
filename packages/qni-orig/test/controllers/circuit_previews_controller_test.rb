require 'test_helper'

class CircuitPreviewsControllerTest < ActionDispatch::IntegrationTest
  test 'should get show' do
    get circuit_preview_url(circuits(:random_bit))
    assert_response :success
  end
end
