# frozen_string_literal: true

require 'test_helper'

# https://github.com/rails/rails/pull/43503
Selenium::WebDriver.logger.ignore(:browser_options)

# rubocop:disable Metrics/ClassLength
class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium_chrome_headless

  def assert_steps(number)
    assert_selector 'circuit-step:not([data-shadow])', count: number
  end

  def assert_shadow_steps(number)
    assert_selector 'circuit-step[data-shadow]', count: number
  end

  def assert_wires(number)
    all('circuit-step').each do |each|
      within each do
        assert_selector 'circuit-dropzone', count: number
      end
    end
  end

  def assert_enabled(operation)
    assert_nil operation['data-disabled']
  end

  def assert_disabled(operation)
    assert_not_nil operation['data-disabled']
  end

  def assert_value(value, element)
    shadow_root(element).find_element :css, '#value'
    assert_equal value, element['data-value']
  end

  def assert_angle(phi, element)
    assert_equal phi, element['data-angle']
  end

  def assert_wire_bottom(dropzone)
    assert_not_nil dropzone['data-connect-bottom']
  end

  def assert_wire_top(dropzone)
    assert_not_nil dropzone['data-connect-top']
  end

  def assert_input_wire_quantum(dropzone)
    assert_equal '', dropzone['data-input-wire-quantum']
  end

  def assert_input_wire_classical(dropzone)
    assert_nil dropzone['data-input-wire-quantum']
  end

  def assert_output_wire_quantum(dropzone)
    assert_equal '', dropzone['data-output-wire-quantum']
  end

  def assert_output_wire_classical(dropzone)
    assert_nil dropzone['data-output-wire-quantum']
  end

  def assert_popup(text, element)
    popup_id = element['aria-describedby']

    assert_not_nil popup_id
    assert_selector("##{popup_id}", text: text)
  end

  def assert_qubit_circles(number)
    qubit_circles = shadow_root(find('#circle-notation')).find_elements(:css, '.qubit-circle').filter(&:displayed?)
    assert_equal number, qubit_circles.length
  end

  def assert_magnitudes(*magnitudes)
    qubit_circles = shadow_root(find('#circle-notation')).find_elements(:css, '.qubit-circle').filter(&:displayed?)

    magnitudes.each_with_index do |each, index|
      qubit_circle = qubit_circles[index]
      amplitude_real = qubit_circle['data-amplitude-real'].to_f
      amplitude_imag = qubit_circle['data-amplitude-imag'].to_f
      assert_in_delta each, Complex(amplitude_real, amplitude_imag).abs, 0.000001
    end
  end

  def assert_phases(*phases)
    qubit_circles = shadow_root(find('#circle-notation')).find_elements(:css, '.qubit-circle').filter(&:displayed?)

    phases.each_with_index do |each, index|
      qubit_circle = qubit_circles[index]
      amplitude_real = qubit_circle['data-amplitude-real'].to_f
      amplitude_imag = qubit_circle['data-amplitude-imag'].to_f
      phase = Math.atan2(amplitude_imag, amplitude_real)
      phase_deg = (phase / Math::PI) * 180
      assert_equal each, phase_deg.to_i
    end
  end

  def assert_clipboard(expected)
    assert_equal expected, clipboard
  end

  def drag_and_drop(element, to:)
    element.drag_to(to, html5: false)
  end

  def put_operation(name, col:, row:)
    operation = palette(name)

    page.driver.browser.action
        .move_to(operation.native, 0, 0)
        .click_and_hold
        .perform
    operation.drag_to dropzone(col, row), html5: false

    operation
  end

  # rubocop:disable Metrics/AbcSize
  def hover_operation(name, col:, row:)
    dropzone = dropzone(col, row)

    page.driver.browser.action
        .move_to(palette(name).native, 0, 0)
        .click_and_hold
        .move_to(dropzone.native, client_width(dropzone) / 2, client_height(dropzone) / 2)
        .perform

    within dropzone do
      return find(operation_name_to_locator(name))
    end
  end
  # rubocop:enable Metrics/AbcSize

  # rubocop:disable Metrics/MethodLength
  def operation_name_to_locator(name)
    {
      'H' => 'h-gate',
      'X' => 'x-gate',
      'Y' => 'y-gate',
      'Z' => 'z-gate',
      'Phase' => 'phase-gate',
      '√X' => 'rnot-gate',
      'Rx' => 'rx-gate',
      'Ry' => 'ry-gate',
      'Rz' => 'rz-gate',
      'Swap' => 'swap-gate',
      'Control' => 'control-gate',
      '•' => 'control-gate',
      'Bloch' => 'bloch-display',
      '|0>' => 'write-gate[data-value="0"]',
      '|1>' => 'write-gate[data-value="1"]',
      'Measure' => 'measurement-gate'
    }.fetch(name)
  rescue KeyError
    raise "Operation '#{name}' not found"
  end
  # rubocop:enable Metrics/MethodLength

  def drag_and_hover(element, over:)
    page.driver.browser.action
        .move_to(element.native, 0, 0)
        .click_and_hold
        .move_to(over.native, client_width(over) / 2, client_height(over) / 2)
        .perform
  end

  def palette(operation)
    locator = operation_name_to_locator(operation)
    first "#palette #{locator}"
  end

  def quantum_circuit(locator)
    first("quantum-circuit #{locator}")
  end

  def dropzone(column, row)
    steps = all('circuit-step:not([data-shadow])')
    step = steps[column]

    within step do
      return all('circuit-dropzone')[row]
    end
  end

  def operation(locator, dropzone)
    within dropzone do
      return find(locator)
    end
  end

  def decoded_current_path
    URI.decode_www_form_component(current_path)
  end

  def current_session_base_url
    host = Capybara.current_session.server.host
    port = Capybara.current_session.server.port
    "http://#{host}:#{port}"
  end

  private

  def clipboard
    page.driver.browser.execute_cdp('Browser.grantPermissions', origin: page.server_url,
                                                                permissions: ['clipboardReadWrite'])
    page.evaluate_async_script('navigator.clipboard.readText().then(arguments[0])')
  end

  def client_width(element)
    page.evaluate_script("document.querySelector('#{element.tag_name}').clientWidth")
  end

  def client_height(element)
    page.evaluate_script("document.querySelector('#{element.tag_name}').clientHeight")
  end

  def shadow_root(element)
    page.evaluate_script(<<~JS, element)
      (function(root){
        return root.shadowRoot;
      })(arguments[0])
    JS
  end
end
# rubocop:enable Metrics/ClassLength
