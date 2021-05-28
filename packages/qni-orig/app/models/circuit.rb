require 'qni/erb_generator'

class Circuit < ApplicationRecord
  validates :name, presence: true
  validates :dsl, presence: true

  def erb
    @erb ||= Qni::ErbGenerator.new(dsl).generate_erb
  end

  def nqubit
    Qni::Dsl.load(dsl).nqubit
  end
end
