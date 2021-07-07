require 'ext/css_class_string/helper'

module CssClassStringHelper
  def sorted_class_string(*args)
    CssClassString::Helper.new(*args).klasses.join(' ')
  end
end
