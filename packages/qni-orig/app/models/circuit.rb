# frozen_string_literal: true

class Circuit < ApplicationRecord
  SOCIAL_IMAGE_WIDTH = 1200
  SOCIAL_IMAGE_HEIGHT = 630

  include Routing

  has_one_attached :social_image

  after_create :attach_social_image, unless: proc { social_image.attached? }

  validates :json, presence: true
  validate :json_cannot_be_invalid_json_string

  private

  def json_cannot_be_invalid_json_string
    JSON.parse json
  rescue JSON::ParseError
    errors.add :json, 'invalid JSON format'
  end

  def attach_social_image
    social_image.attach(io: StringIO.new(generate_social_image),
                        filename: 'social_image.png',
                        content_type: 'application/png')
  end

  def generate_social_image
    Grover.new(circuit_svg_url(json: json),
               viewport: { width: SOCIAL_IMAGE_WIDTH, height: SOCIAL_IMAGE_HEIGHT },
               emulate_media: 'screen',
               landscape: true).to_png
  end
end
