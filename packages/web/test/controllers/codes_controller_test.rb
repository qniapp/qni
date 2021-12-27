require 'test_helper'

class CodesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @code = codes(:random_bit)
  end

  test 'should get index' do
    get codes_url
    assert_response :success
  end

  test 'should get new' do
    get new_code_url
    assert_response :success
  end

  test 'should create code' do
    assert_difference('Code.count') do
      post codes_url, params: { code: { body: @code.body, title: @code.title } }
    end

    assert_redirected_to code_url(Code.last)
  end

  test 'should show code' do
    get code_url(@code)
    assert_response :success
  end

  test 'should get edit' do
    get edit_code_url(@code)
    assert_response :success
  end

  test 'should update code' do
    patch code_url(@code), params: { code: { body: @code.body, title: @code.title } }
    assert_redirected_to code_url(@code)
  end

  test 'should destroy code' do
    assert_difference('Code.count', -1) do
      delete code_url(@code)
    end

    assert_redirected_to codes_url
  end
end
