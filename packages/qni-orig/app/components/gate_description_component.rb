require 'component'

class GateDescriptionComponent < Component
  attribute :title
  attribute :subtitles

  validates :title, length: { minimum: 1 }
  validates :subtitles, length: { minimum: 1 }
end
