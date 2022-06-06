# frozen_string_literal: true

module Jekyll
  module QubitCircleFilter
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

      tw_wrapper_size = case size
                        when 'xl'
                          20
                        when 'lg'
                          16
                        when 'base'
                          11
                        else
                          raise 'not implemented'
                        end

      tw_ket_mt = case size
                  when 'xl'
                    '-mt-3'
                  when 'lg'
                    '-mt-2.5'
                  when 'base'
                    '-mt-1'
                  else
                    raise 'not implemented'
                  end

      tw_font_size = case size
                     when 'xl'
                       'base'
                     when 'lg'
                       'sm'
                     when 'base'
                       'xs'
                     else
                       raise 'not implemented'
                     end

      klass = if color == ''
                "h-#{tw_size} w-#{tw_size}"
              else
                "h-#{tw_size} w-#{tw_size} magnitude-#{color}"
              end

      contents = %w[amplitude probability phase] if contents.empty?

      show_popup_header = contents.include?('header')
      show_popup_amplitude = contents.include?('amplitude')
      show_popup_probability = contents.include?('probability')
      show_popup_phase = contents.include?('phase')

      <<~HTML
        <div class="flex w-#{tw_wrapper_size} flex-col items-start">
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
          <div class="#{tw_ket_mt} flex w-full flex-row justify-end">
            <span class="font-mono text-slate-500 text-#{tw_font_size}">|#{ket}⟩</span>
          </div>
        </div>
      HTML
    end
  end
end

Liquid::Template.register_filter(Jekyll::QubitCircleFilter)
