require 'component'

class Gates::LabelComponent < Component
  attribute :text
  attribute :bottom, default: false

  validates :bottom, inclusion: { in: [true, false] }

  def top?
    !bottom
  end

  def bottom?
    bottom
  end

  def data
    return { target: 'gate-popup.topLabel' } if top?
    return { target: 'gate-popup.bottomLabel' } if bottom?
  end
end
