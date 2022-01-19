# frozen_string_literal: true

require 'application_system_test_case'

class ShareTest < ApplicationSystemTestCase
  test 'default title' do
    visit circuit_path

    find('#menu-button').click
    find('#menu-item-share').click

    assert_field 'circuit-title', with: ''
  end

  test 'default share url' do
    visit circuit_path

    find('#menu-button').click
    find('#menu-item-share').click

    within find('#circuit-url') do
      assert_text "#{current_session_base_url}/#{URI.encode_www_form_component('{"cols":[]}')}"
    end
  end

  test 'close share modal' do
    visit circuit_path
    find('#menu-button').click
    find('#menu-item-share').click

    find('#close-share-modal-button').click

    assert_no_selector '#share-modal'
  end

  test 'set circuit title' do
    visit circuit_path
    find('#menu-button').click
    find('#menu-item-share').click

    find_field('circuit-title').set("Grover反復\n")

    within find('#circuit-url') do
      assert_text "#{current_session_base_url}/#{URI.encode_www_form_component('{"cols":[],"title":"Grover反復"}')}"
    end
  end

  test 'copy URL to clipboard' do
    visit circuit_path
    find('#menu-button').click
    find('#menu-item-share').click

    find('#copy-button').click

    assert_clipboard "#{current_session_base_url}/#{URI.encode_www_form_component('{"cols":[]}')}"
  end

  test 'tweet without circuit title' do
    visit circuit_path
    find('#menu-button').click
    find('#menu-item-share').click

    find('#tweet-button').click

    assert_equal 2, windows.size
    within_window windows[1] do
      json = URI.encode_www_form_component('{"cols":[]}')
      assert_equal "https://twitter.com/share?hashtags=qni&url=#{current_session_base_url}/#{json}", CGI.unescape(current_url)
    end
  end

  test 'tweet with circuit title' do
    visit circuit_path
    find('#menu-button').click
    find('#menu-item-share').click
    find_field('circuit-title').set("Grover反復\n")

    find('#tweet-button').click

    within_window windows[1] do
      json = URI.encode_www_form_component('{"cols":[],"title":"Grover反復"}')
      assert_equal "https://twitter.com/share?text=Grover反復&hashtags=qni&url=#{current_session_base_url}/#{json}", CGI.unescape(current_url)
    end
  end
end
