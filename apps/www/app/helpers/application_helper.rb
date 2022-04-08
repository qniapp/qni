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

  def palette
    render 'palette'
  end

  def palette_md
    render 'palette_md'
  end

  def palette_help_templates
    render 'palette_help_templates'
  end

  def circle_notation
    render 'circle_notation'
  end

  def run_circuit_button(options)
    render 'run_circuit_button', options: options
  end
end
