# frozen_string_literal: true

class Circuit < ApplicationRecord
  SOCIAL_IMAGE_WIDTH = 1200
  SOCIAL_IMAGE_HEIGHT = 630

  has_one_attached :social_image

  validates :json, presence: true
  validate :json_cannot_be_invalid_json_string

  def attach_social_image(circuit_svg_url)
    return if skip_social_image_generation? || social_image.attached?

    social_image.attach(io: StringIO.new(generate_social_image(circuit_svg_url)),
                        filename: 'social_image.png',
                        content_type: 'application/png',
                        identify: false)
  rescue StandardError => error
    log_social_image_failure(error)
  end

  private

  def skip_social_image_generation?
    Rails.env.test? && !Rails.configuration.x.grover.enabled_in_test
  end

  def json_cannot_be_invalid_json_string
    JSON.parse json
  rescue JSON::ParseError
    errors.add :json, 'invalid JSON format'
  end

  def generate_social_image(circuit_svg_url)
    Grover.new(circuit_svg_url,
               **grover_runtime_options,
               viewport: { width: SOCIAL_IMAGE_WIDTH, height: SOCIAL_IMAGE_HEIGHT },
               emulate_media: 'screen',
               landscape: true).to_png
  end

  def grover_runtime_options
    config = Rails.configuration.x.grover

    {}.tap do |options|
      options[:executable_path] = config.executable_path if config.executable_path.present?
      options[:launch_args] = config.launch_args if config.launch_args.any?
    end
  end

  def log_social_image_failure(error)
    Rails.logger.warn(
      "Circuit social image generation failed circuit_id=#{id || 'new'} env=#{Rails.env} error_class=#{error.class} error_message=#{error.message}"
    )
  end
end
