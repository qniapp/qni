# frozen_string_literal: true

module Jekyll
  module QubitCircleFilter
    # rubocop:disable Metrics/CyclomaticComplexity
    # rubocop:disable Metrics/MethodLength
    # rubocop:disable Metrics/PerceivedComplexity
    def qubit_circle(amplitude, ket, size = 'xl', color = '', *contents)
      tw_size = case size
                when 'xl'
                  16
                when 'lg'
                  12
                when 'base'
                  8
                else
                  raise 'not implemented'
                end

      klass = if color == ''
                "h-#{tw_size} w-#{tw_size} my-1"
              else
                "h-#{tw_size} w-#{tw_size} magnitude-#{color} my-1"
              end

      contents = %w[amplitude probability phase] if contents.empty?

      show_popup_header = contents.include?('header')
      show_popup_amplitude = contents.include?('amplitude')
      show_popup_probability = contents.include?('probability')
      show_popup_phase = contents.include?('phase')

      <<~HTML
        <qubit-circle
          class="#{klass}"
          data-ket="#{ket}"
          data-amplitude="#{amplitude}"
          data-popup-template-id="qubit-circle-popup"
          #{show_popup_header ? 'data-show-popup-header' : ''}
          #{show_popup_amplitude ? 'data-show-popup-amplitude' : ''}
          #{show_popup_probability ? 'data-show-popup-probability' : ''}
          #{show_popup_phase ? 'data-show-popup-phase' : ''}
        ></qubit-circle>
      HTML
    end
    # rubocop:enable Metrics/CyclomaticComplexity
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/PerceivedComplexity
  end
end

Liquid::Template.register_filter(Jekyll::QubitCircleFilter)
