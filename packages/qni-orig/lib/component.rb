# frozen_string_literal: true

require 'element'

class Component < Element
  def self.component_name
    name.chomp('Component').demodulize.underscore
  end

  def self.component_path
    name.chomp('Component').underscore
  end

  def render
    @view.render partial: partial_path, object: self
  end

  private

  def partial_path
    [self.class.component_path, self.class.component_name].join('/')
  end
end
