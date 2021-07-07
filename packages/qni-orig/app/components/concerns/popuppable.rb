module Popuppable
  extend ActiveSupport::Concern

  private

  def data_popup
    { 'gate-popup-type': popup_type }
  end

  def popup_type
    raise NotImplementedError
  end
end
