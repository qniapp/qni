# frozen_string_literal: true

module ApplicationHelper
  include BetterHtml::Helpers

  def title(circuit)
    title = circuit ? JSON.parse(circuit.json)['title'] : nil
    title || 'Qni'
  end

  def share_modal
    render 'share_modal'
  end

  def menu
    render 'menu'
  end
end
