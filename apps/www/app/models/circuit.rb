# frozen_string_literal: true

class Circuit < ApplicationRecord
  SOCIAL_IMAGE_WIDTH = 1200
  SOCIAL_IMAGE_HEIGHT = 630

  has_one_attached :social_image

  validates :json, presence: true
  validate :json_cannot_be_invalid_json_string

  def attach_social_image(circuit_svg_url)
    return if social_image.attached?

    social_image.attach(io: StringIO.new(generate_social_image(circuit_svg_url)),
                        filename: 'social_image.png',
                        content_type: 'application/png',
                        identify: false)
  end

  private

  def json_cannot_be_invalid_json_string
    JSON.parse json
  rescue JSON::ParseError
    errors.add :json, 'invalid JSON format'
  end

  def generate_social_image(circuit_svg_url)
    Grover.new(circuit_svg_url,
               viewport: { width: SOCIAL_IMAGE_WIDTH, height: SOCIAL_IMAGE_HEIGHT },
               emulate_media: 'screen',
               landscape: true).to_png
  end
end
