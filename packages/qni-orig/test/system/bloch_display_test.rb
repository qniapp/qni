require 'application_system_test_case'

class BlochDisplayTest < ApplicationSystemTestCase
  test 'bloch display inspector' do
    visit circuit_path

    bloch_display = put_operation('Bloch', col: 0, row: 0)
    bloch_display.hover

    assert_popup <<~TEXT.chomp, bloch_display
      Local State
      r: +1.0000, ϕ: +0.00, θ: +0.00
      x: +0.0000, y: +0.0000, z: +1.0000
    TEXT
  end
end
