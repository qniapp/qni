# frozen_string_literal: true

module ApplicationHelper
  include BetterHtml::Helpers

  def title(circuit)
    title = circuit ? JSON.parse(circuit.json)['title'] : nil
    title || 'Qni'
  end
end
