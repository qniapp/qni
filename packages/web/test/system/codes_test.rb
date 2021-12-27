require 'application_system_test_case'

class CodesTest < ApplicationSystemTestCase
  setup do
    @code = codes(:random_bit)
  end

  test 'visiting the index' do
    visit codes_url

    assert_selector 'h1', text: 'Codes'
    assert_selector :code, text: 'Random bit'
    assert_selector :code, text: 'Random byte'
  end

  test 'creating a Code' do
    visit codes_url
    click_on 'New Code'

    fill_in 'Title', with: 'Nop'
    fill_in 'Body', with: 'qc.nop();'
    click_on 'Create Code'

    assert_text 'Code was successfully created'
    assert_text 'Nop'
    assert_text 'qc.nop();'
  end

  test 'updating a Code' do
    visit codes_url
    click_on 'Edit', match: :first

    fill_in 'Title', with: @code.title + ' (Updated)'
    fill_in 'Body', with: "// Random bit sample\n" + @code.body
    click_on 'Update Code'

    assert_text 'Code was successfully updated'
    assert_text @code.title + ' (Updated)'
    assert_text "// Random bit sample\n" + @code.body
  end

  test 'destroying a Code' do
    visit codes_url
    page.accept_confirm do
      click_on 'Destroy', match: :first
    end

    assert_text 'Code was successfully destroyed'
    assert_selector :code, count: 1
    assert_selector :code, text: 'Random byte'
  end
end
