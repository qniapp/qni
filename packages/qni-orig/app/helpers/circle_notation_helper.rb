module CircleNotationHelper
  def circle_notation(circuit)
    Qni::CircleNotationGenerator.new(circuit, self).generate
  end
end
