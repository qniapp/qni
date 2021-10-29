# frozen_string_literal: true

module ComponentsHelper
  def component(name, attrs = nil, &block)
    view = attrs ? attrs.fetch(:view, self) : self
    "#{name}_component".classify.constantize.new(view, attrs, &block).render
  end
end
