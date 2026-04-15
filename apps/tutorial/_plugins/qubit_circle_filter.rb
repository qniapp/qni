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

      popup_attrs = [
        ('data-show-popup-header' if contents.include?('header')),
        ('data-show-popup-amplitude' if contents.include?('amplitude')),
        ('data-show-popup-probability' if contents.include?('probability')),
        ('data-show-popup-phase' if contents.include?('phase'))
      ].compact.join("\n          ")

      <<~HTML
        <qubit-circle
          class="#{klass}"
          data-ket="#{ket}"
          data-amplitude="#{amplitude}"
          data-popup-template-id="qubit-circle-popup"
          #{popup_attrs}
        ></qubit-circle>
      HTML
    end
    # rubocop:enable Metrics/CyclomaticComplexity
    # rubocop:enable Metrics/MethodLength
    # rubocop:enable Metrics/PerceivedComplexity
  end
end

Liquid::Template.register_filter(Jekyll::QubitCircleFilter)
