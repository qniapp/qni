module StateVectorHelper
  def state_vector(&block)
    component 'state_vector', &block
  end
end
