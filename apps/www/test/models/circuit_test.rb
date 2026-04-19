# frozen_string_literal: true

require 'test_helper'
require 'minitest/mock'
require 'stringio'

class CircuitTest < ActiveSupport::TestCase
  test 'attach_social_image soft-fails and leaves attachment absent when Grover raises' do
    config = Rails.configuration.x.grover
    original_enabled_in_test = config.enabled_in_test
    config.enabled_in_test = true
    output = StringIO.new
    logger = ActiveSupport::TaggedLogging.new(ActiveSupport::Logger.new(output))
    circuit = Circuit.new(json: '{"cols":[]}')

    circuit.stub(:generate_social_image, ->(*) { raise Grover::DependencyError, 'missing browser' }) do
      Rails.stub(:logger, logger) do
        assert_nothing_raised do
          circuit.attach_social_image('http://example.test/svg/%7B%7D')
        end
      end
    end

    assert_not circuit.social_image.attached?
    assert_match 'Circuit social image generation failed', output.string
    assert_match 'circuit_id=new', output.string
    assert_match "env=#{Rails.env}", output.string
    assert_match 'error_class=Grover::DependencyError', output.string
    assert_match 'error_message=missing browser', output.string
  ensure
    config.enabled_in_test = original_enabled_in_test
  end

  test 'attach_social_image skips generation in test when grover is disabled' do
    config = Rails.configuration.x.grover
    original_enabled_in_test = config.enabled_in_test
    config.enabled_in_test = false
    circuit = Circuit.new(json: '{"cols":[]}')

    circuit.stub(:generate_social_image, ->(*) { flunk 'expected social image generation to be skipped' }) do
      assert_nothing_raised do
        circuit.attach_social_image('http://example.test/svg/%7B%7D')
      end
    end
  ensure
    config.enabled_in_test = original_enabled_in_test
  end

  test 'attach_social_image returns early when social_image is already attached' do
    circuit = Circuit.new(json: '{"cols":[]}')
    attached_social_image = Object.new
    attached_social_image.define_singleton_method(:attached?) { true }

    circuit.stub(:social_image, attached_social_image) do
      circuit.stub(:generate_social_image, ->(*) { flunk 'expected social image generation to be skipped' }) do
        Rails.stub(:env, ActiveSupport::StringInquirer.new('development')) do
          assert_nothing_raised do
            circuit.attach_social_image('http://example.test/svg/%7B%7D')
          end
        end
      end
    end
  end

  test 'generate_social_image passes through grover runtime options' do
    config = Rails.configuration.x.grover
    original_executable_path = config.executable_path
    original_launch_args = config.launch_args
    config.executable_path = '/tmp/chrome'
    config.launch_args = ['--no-sandbox', '--disable-dev-shm-usage']
    circuit = Circuit.new(json: '{"cols":[]}')
    captured_url = nil
    captured_options = nil
    grover_instance = Object.new
    grover_instance.define_singleton_method(:to_png) { 'PNGDATA' }

    Grover.stub(:new, lambda { |url, **options|
      captured_url = url
      captured_options = options
      grover_instance
    }) do
      assert_equal 'PNGDATA', circuit.send(:generate_social_image, 'http://example.test/svg/%7B%7D')
    end

    assert_equal 'http://example.test/svg/%7B%7D', captured_url
    assert_equal '/tmp/chrome', captured_options[:executable_path]
    assert_equal ['--no-sandbox', '--disable-dev-shm-usage'], captured_options[:launch_args]
    assert_equal({ width: Circuit::SOCIAL_IMAGE_WIDTH, height: Circuit::SOCIAL_IMAGE_HEIGHT }, captured_options[:viewport])
    assert_equal 'screen', captured_options[:emulate_media]
    assert_equal true, captured_options[:landscape]
  ensure
    config.executable_path = original_executable_path
    config.launch_args = original_launch_args
  end
end
