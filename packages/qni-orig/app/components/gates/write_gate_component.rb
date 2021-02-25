require 'component'

class Gates::WriteGateComponent < Component
  attribute :value
  attribute :set

  validates :value, inclusion: { in: [0, 1] }, if: :value

  def klass
    class_string('instruction', 'gate', 'write-gate')
  end

  def data
    { value: value }
  end
end
