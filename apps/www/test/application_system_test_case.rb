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

  def assert_outline(qpu_operation)
    outline_el = qpu_operation.shadow_root.find('[part="outline"]')

    assert_not_nil outline_el
  end

  def assert_no_outline(qpu_operation)
    assert_raises(Capybara::ElementNotFound) do
      qpu_operation.shadow_root.find('[part="outline"]')
    end
  end

  def assert_body_background_color(color, operation)
    body_part = operation.shadow_root.find('[part="body"]')

    assert_equal color, body_part.native.css_value('background-color')
  end

  def assert_icon_color(color, operation)
    icon_part = operation.shadow_root.find('[part="icon"]')

    assert_equal color, icon_part.native.css_value('color')
  end

  def assert_enabled(operation)
    assert_nil operation['data-disabled']
  end

  def assert_disabled(operation)
    assert_not_nil operation['data-disabled']
  end

  def assert_value(value, element)
    element.shadow_root.find('#value')
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

  def assert_input_wire_quantum(step:, bit:)
    assert_equal '', dropzone(step, bit)['data-input-wire-quantum']
  end

  def assert_input_wire_classical(step:, bit:)
    assert_nil dropzone(step, bit)['data-input-wire-quantum']
  end

  def assert_output_wire_quantum(step:, bit:)
    assert_equal '', dropzone(step, bit)['data-output-wire-quantum']
  end

  def assert_output_wire_classical(step:, bit:)
    assert_nil dropzone(step, bit)['data-output-wire-quantum']
  end

  def assert_popup(text, element)
    popup_id = element['aria-describedby']

    assert_not_nil popup_id
    assert_selector("##{popup_id}", text: text)
  end

  def assert_qubit_circles(number)
    qubit_circles = find('#circle-notation').shadow_root.all('.qubit-circle')
    assert_equal number, qubit_circles.length
  end

  def assert_magnitudes(*magnitudes)
    qubit_circles = find('#circle-notation').shadow_root.all('.qubit-circle')

    magnitudes.each_with_index do |each, index|
      qubit_circle = qubit_circles[index]
      amplitude_real = qubit_circle['data-amplitude-real'].to_f
      amplitude_imag = qubit_circle['data-amplitude-imag'].to_f
      assert_in_delta each, Complex(amplitude_real, amplitude_imag).abs, 0.000001
    end
  end

  def assert_phases(*phases)
    qubit_circles = find('#circle-notation').shadow_root.all('.qubit-circle')

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

  def put_operation(name, step:, bit:)
    operation = palette(name)

    page.driver.browser.action
        .move_to(operation.native, 0, 0)
        .click_and_hold
        .perform
    operation.drag_to dropzone(step, bit), html5: false

    operation
  end

  def hover(operation)
    operation.hover
  end

  def grab(operation)
    page.driver.browser.action
        .move_to(operation.native, 0, 0)
        .click_and_hold
        .perform
  end

  # rubocop:disable Metrics/AbcSize
  def hover_operation(name, step:, bit:)
    dropzone = dropzone(step, bit)

    page.driver.browser.action
        .move_to(palette(name).native, 0, 0)
        .click_and_hold
        .move_to(dropzone.native, client_width(dropzone) / 2, client_height(dropzone) / 2)
        .perform

    # within dropzone do
    #   return find(operation_name_to_locator(name))
    # end
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
      'S' => 's-gate',
      'S†' => 's-dagger-gate',
      'T' => 't-gate',
      'T†' => 't-dagger-gate',
      '√X' => 'rnot-gate',
      'Rx' => 'rx-gate',
      'Ry' => 'ry-gate',
      'Rz' => 'rz-gate',
      '…' => 'spacer-gate',
      'QFT' => 'qft-gate',
      'QFT†' => 'qft-dagger-gate',
      'Swap' => 'swap-gate',
      'Control' => 'control-gate',
      '•' => 'control-gate',
      'Bloch' => 'bloch-display',
      '|0>' => 'write-gate[data-value="0"]',
      '|0⟩' => 'write-gate[data-value="0"]',
      '|1>' => 'write-gate[data-value="1"]',
      '|1⟩' => 'write-gate[data-value="1"]',
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

  def colors_transparent
    'rgba(0, 0, 0, 0)'
  end

  def colors_white
    'rgba(255, 255, 255, 1)'
  end

  def colors_neutral(number)
    {
      900 => 'rgba(23, 23, 23, 1)'
    }.fetch(number)
  end

  def colors_emerald(number)
    {
      500 => 'rgba(16, 185, 129, 1)'
    }.fetch(number)
  end

  def colors_purple(number)
    {
      400 => 'rgba(192, 132, 252, 1)',
      500 => 'rgba(168, 85, 247, 1)'
    }.fetch(number)
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
end
# rubocop:enable Metrics/ClassLength
