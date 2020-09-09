require 'test_helper'

class Components::GatesHelperTest < ActionView::TestCase
  test 'write 0' do
    assert_dom_equal beautify(<<~ERB), beautify(component('rw', type: :write, value: 0))
      <div class="circuit-element rw gate write rw--0" data-value="0">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value"></span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'write 1' do
    assert_dom_equal beautify(<<~ERB), beautify(component('rw', type: :write, value: 0))
      <div class="circuit-element rw gate write rw--0" data-value="0">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value"></span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'write (set)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('rw', type: :write, value: 0, set: 'alice_v'))
      <div class="circuit-element rw gate write rw--0" data-value="0" data-set="alice_v">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value"></span>&#10217;
          </div>
        </div>
        <div class="circuit-element__label">alice_v</div>
      </div>
    ERB
  end

  test 'readout 0' do
    assert_dom_equal beautify(<<~ERB), beautify(component('rw', type: :readout, value: 0))
      <div class="circuit-element rw gate readout rw--0" data-value="0">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value"></span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'readout 1' do
    assert_dom_equal beautify(<<~ERB), beautify(component('rw', type: :readout, value: 1))
      <div class="circuit-element rw gate readout rw--1" data-value="1">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value"></span>&#10217;
          </div>
        </div>
      </div>
    ERB
  end

  test 'readout (set)' do
    assert_dom_equal beautify(<<~ERB), beautify(component('rw', type: :readout, value: 0, set: 'alice_v'))
      <div class="circuit-element rw gate readout rw--0" data-value="0" data-set="alice_v">
        <div class="rw__wire rw__wire--left"></div>
        <div class="rw__wire rw__wire--right"></div>
        <div class="rw__body">
          <div>
            |<span class="rw__value"></span>&#10217;
          </div>
        </div>
        <div class="circuit-element__label">alice_v</div>
      </div>
    ERB
  end
end
