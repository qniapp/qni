require 'component'

class QubitCircleComponent < Component
  attribute :ket

  validates :ket, presence: true

  def magnitude_string
    (get_instance_variable(:magnitude_string) || get_instance_variable(:magnitude).to_s)
      .gsub('sqrt', '√')
      .gsub(/√\((.)\)/, '√\1')
      .gsub(/\s+/, '')
  end

  def phase
    magnitude.positive? ? get_instance_variable(:phase) : nil
  end

  def phase_string
    return unless phase

    (get_instance_variable(:phase_string) || phase.to_s)
      .gsub('sqrt', '√')
      .gsub(/√\((.)\)/, '√\1')
      .gsub('pi', 'π')
      .gsub(/\s+/, '')
  end
end
