module ComponentsHelper
  def circuit_thumbnail(*options)
    component 'circuit_thumbnail', *options
  end

  def component(name, attrs = nil, &block)
    view = attrs ? attrs.fetch(:view, self) : self
    "#{name}_component".classify.constantize.new(view, attrs, &block).render
  end
end
