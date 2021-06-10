require 'component'

class Gates::PopupComponent < Component
  attribute :type
  attribute :label
  attribute :error_message

  validates :type, presence: true
  validates :label, presence: true
  validates :error_message, presence: true
end
