require 'test_helper'

class CuQuantumControllerTest < ActionDispatch::IntegrationTest
  test 'should get show' do
    get cu_quantum_url
    assert_response :success
  end
end
