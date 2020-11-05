require 'component'
require 'concerns/connectable'

class Circuit::DropzoneComponent < Component
  include Connectable

  attribute :palette, default: false
  attribute :trash, default: false
  attribute :wire_active, default: true
  attribute :no_wire, default: false

  validates :palette, inclusion: { in: [true, false] }
  validates :trash, inclusion: { in: [true, false] }
  validates :wire_active, inclusion: { in: [true, false] }
  validates :no_wire, inclusion: { in: [true, false] }

  def circuit?
    !palette? && !trash?
  end

  def palette?
    palette
  end

  def trash?
    trash
  end

  def occupied?
    circuit? && content
  end

  def wire_active?
    wire_active
  end

  def no_wire?
    no_wire
  end
end
