require 'qni/circle_notation_generator'
require 'qni/erb_generator'

class Circuit < ApplicationRecord
  validates :name, presence: true
  validates :dsl, presence: true
  validates :erb, presence: true
  validates :circle_notation, presence: true

  before_validation :generate_erb
  before_validation :generate_circle_notation

  def generate_erb
    self.erb = Qni::ErbGenerator.new(dsl).generate_erb
  end

  def generate_circle_notation
    self.circle_notation = Qni::CircleNotationGenerator.new(self).generate_circle_notation
  end

  def nqubit
    Qni::Dsl.load(dsl).nqubit
  end
end
