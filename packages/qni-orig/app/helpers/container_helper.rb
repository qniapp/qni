module ContainerHelper
  def container(&block)
    render 'elements/container', &block
  end
end
