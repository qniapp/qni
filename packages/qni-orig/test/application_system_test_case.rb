require 'test_helper'

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
      within(each) do
        assert_selector 'circuit-dropzone', count: number
      end
    end
  end

  def assert_value(value, element)
    shadow_root = page.evaluate_script(<<~JS, element)
      (function(root){
        return root.shadowRoot;
      })(arguments[0])
    JS

    within(shadow_root) do
      assert_selector '#value'
    end
    assert_equal value, element['data-value']
  end

  def assert_no_value(element)
    shadow_root = page.evaluate_script(<<~JS, element)
      (function(root){
        return root.shadowRoot;
      })(arguments[0])
    JS

    within(shadow_root) do
      assert_no_selector '#value'
    end
  end

  def assert_phi(phi, element)
    assert_equal phi, element['data-phi']
  end

  def assert_theta(theta, element)
    assert_equal theta, element['data-theta']
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

  def drag_and_drop(element, to:)
    element.drag_to(to, html5: false)
  end

  def drag_and_hover(element, over:)
    page.driver.browser.action
        .move_to(element.native, 0, 0)
        .click_and_hold
        .move_to(over.native, client_width(over) / 2, client_height(over) / 2)
        .perform
  end

  def palette(locator)
    first("#palette #{locator}")
  end

  def quantum_circuit(locator)
    first("quantum-circuit #{locator}")
  end

  def dropzone(column, row)
    within(all('circuit-step')[column]) do
      return all('circuit-dropzone')[row]
    end
  end

  def decoded_current_path
    URI.decode_www_form_component(current_path)
  end

  private

  def client_width(element)
    page.evaluate_script("document.querySelector('#{element.tag_name}').clientWidth")
  end

  def client_height(element)
    page.evaluate_script("document.querySelector('#{element.tag_name}').clientHeight")
  end
end
