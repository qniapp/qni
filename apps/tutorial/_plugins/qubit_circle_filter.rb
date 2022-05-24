# frozen_string_literal: true

module Jekyll
  module QubitCircleFilter
    # あとで qubit_circle に直す
    def qubit_circle(amplitude, ket, color = '')
      klass = if color == ''
                'h-16 w-16'
              else
                "h-16 w-16 magnitude-#{color}"
              end

      <<~HTML
        <div class="flex w-20 flex-col items-start">
          <qubit-circle
            class="#{klass}"
            data-amplitude="#{amplitude}"
            data-popup-template-id="circle-notation-popup"
          ></qubit-circle>
          <div class="-mt-3 flex w-full flex-row justify-end">
            <span class="font-mono text-slate-500">|#{ket}⟩</span>
          </div>
        </div>
      HTML
    end
  end
end

Liquid::Template.register_filter(Jekyll::QubitCircleFilter)
