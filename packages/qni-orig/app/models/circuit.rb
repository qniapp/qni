require 'qni/json_parser'

class Circuit < ApplicationRecord
  validates :name, presence: true
  validates :json, presence: true

  def erb
    @erb ||= Qni::JsonParser.new(json).erb
  end
end
