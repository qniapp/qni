require 'component'

class Gates::BoxComponent < Component
  attribute :label

  validates :label, presence: true
end
