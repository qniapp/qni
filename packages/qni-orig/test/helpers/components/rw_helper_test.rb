require 'test_helper'

class Components::GatesHelperTest < ActionView::TestCase
  test 'write 0' do
    assert_dom_equal beautify(<<~ERB), beautify(write(value: 0))
      <div class="circuit-element rw gate write rw--0">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value">0</span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'write 1' do
    assert_dom_equal beautify(<<~ERB), beautify(write(value: 0))
      <div class="circuit-element rw gate write rw--0">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value">0</span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'write (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(write(value: 0, label: 'write 0'))
      <div class="circuit-element rw gate write rw--0">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value">0</span>&#10217;
          </div>
        </div>
        <div class="circuit-element__label">write 0</div>
      </div>
    ERB
  end

  test 'readout 0' do
    assert_dom_equal beautify(<<~ERB), beautify(readout(value: 0))
      <div class="circuit-element rw gate readout rw--0">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value">0</span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'readout 1' do
    assert_dom_equal beautify(<<~ERB), beautify(readout(value: 0))
      <div class="circuit-element rw gate readout rw--0">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value">0</span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'readout (labeled)' do
    assert_dom_equal beautify(<<~ERB), beautify(readout(value: 0, label: 'alice_v'))
      <div class="circuit-element rw gate readout rw--0">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value">0</span>&#10217;
          </div>
        </div>
        <div class="circuit-element__label">alice_v</div>
      </div>
    ERB
  end
end
