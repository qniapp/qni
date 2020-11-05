require 'component'

class Gates::PopupComponent < Component
  attribute :label
  attribute :error_message

  validates :label, presence: true
  validates :error_message, presence: true
end
