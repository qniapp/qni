require 'component'
require 'concerns/connectable'
require 'concerns/controllable'
require 'concerns/disableable'
require 'concerns/draggable'
require 'concerns/ifable'
require 'concerns/popuppable'
require 'concerns/targetable'

class YGateComponent < Component
  include Connectable
  include Controllable
  include Disableable
  include Draggable
  include Ifable
  include Popuppable
  include Targetable

  include CssClassStringHelper

  def klass
    sorted_class_string('gate',
                        'y-gate',
                        'draggable',
                        'gate--ifable' => self.class < Ifable,
                        'gate--disabled' => disabled?,
                        ['draggable--palette', 'draggable--circuit'] => on_palette?,
                        'connectable--lower-bit' => connected_with_lower_bit?,
                        'connectable--upper-bit' => connected_with_upper_bit?)
  end

  def data
    [
      data_controls,
      data_draggable,
      data_if,
      data_popup
    ].reduce({}) do |result, each|
      result.merge(each)
    end
  end

  def label_text
    self.if ? "if #{self.if}" : nil
  end

  private

  def connected_with_upper_bit?
    return false unless bit
    return false if [controls].flatten.empty?

    ([controls] + [targets]).flatten.any? { |each| each > bit }
  end

  def connected_with_lower_bit?
    return false unless bit
    return false if [controls].flatten.empty?

    ([controls] + [targets]).flatten.any? { |each| each < bit }
  end

  def popup_type
    :if
  end

  def data_if
    { if: self.if, 'gate-label': label_text }
  end
end
