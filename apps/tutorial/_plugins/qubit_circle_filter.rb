# frozen_string_literal: true

module Jekyll
  module QubitCircleFilter
    def qubit_circle(amplitude, ket, size = 'xl', color = '')
      tw_size = case size
                when 'xl'
                  16
                when 'lg'
                  12
                else
                  raise 'not implemented'
                end

      tw_wrapper_size = case size
                        when 'xl'
                          20
                        when 'lg'
                          16
                        else
                          raise 'not implemented'
                        end

      tw_ket_mt = case size
                  when 'xl'
                    '-mt-3'
                  when 'lg'
                    '-mt-2.5'
                  else
                    raise 'not implemented'
                  end

      tw_font_size = case size
                     when 'xl'
                       'base'
                     when 'lg'
                       'sm'
                     else
                       raise 'not implemented'
                     end

      klass = if color == ''
                "h-#{tw_size} w-#{tw_size}"
              else
                "h-#{tw_size} w-#{tw_size} magnitude-#{color}"
              end

      <<~HTML
        <div class="flex w-#{tw_wrapper_size} flex-col items-start">
          <qubit-circle
            class="#{klass}"
            data-ket="#{ket}"
            data-amplitude="#{amplitude}"
            data-popup-template-id="circle-notation-popup"
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
