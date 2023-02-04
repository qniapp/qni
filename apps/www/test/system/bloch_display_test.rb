# frozen_string_literal: true

require 'application_system_test_case'

class BlochDisplayTest < ApplicationSystemTestCase
  setup do
    visit circuit_path
    sleep 1
  end

  # ┌───┐
  # │ B │
  # └───┘
  test 'bloch display inspector' do
    bloch_display = put_operation('Bloch', step: 0, bit: 0)
    bloch_display.hover

    assert_popup <<~TEXT.chomp, bloch_display
      Local State
      r: +1.0000, ϕ: +0.00, θ: +0.00
      x: +0.0000, y: +0.0000, z: +1.0000
    TEXT
  end

  test 'hover' do
    bloch_display = palette('Bloch')
    bloch_display.hover

    assert_outline(bloch_display)
  end

  test 'grab' do
    bloch_display = palette('Bloch')
    grab bloch_display

    assert_no_outline(bloch_display)
  end
end
