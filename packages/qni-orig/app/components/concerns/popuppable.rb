module Popuppable
  extend ActiveSupport::Concern

  included do
    attribute :popup, default: true

    validates :popup, inclusion: { in: [true, false] }
  end

  private

  def data_popup
    { 'gate-popup-type': popup_type,
      action: 'contextmenu->editor#showGatePopup' }
  end

  def popup_type
    raise NotImplementedError
  end
end
