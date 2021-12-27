# frozen_string_literal: true

module CircuitsHelper
  def menu(&block)
    render 'circuits/menu', &block
  end

  def share_button
    render 'circuits/share_button'
  end

  def clear_circuit
    render 'circuits/clear_circuit'
  end

  def copy_link
    render 'circuits/copy_link'
  end
end
