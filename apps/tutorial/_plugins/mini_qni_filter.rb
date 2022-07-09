#!/usr/bin/env ruby
# frozen_string_literal: true

module Jekyll
  module MiniQniFilter
    def mini_qni(json, *gates)
      json.gsub!(/[\r\n]/, ' ')

      gate_htmls = gates.map do |each|
        case each
        when '|0>'
          '<write-gate data-value="0" data-hoverable data-help-id="write0-gate-help"></write-gate>'
        when '|1>'
          '<write-gate data-value="1" data-hoverable data-help-id="write1-gate-help"></write-gate>'
        when 'H'
          '<h-gate data-hoverable></h-gate>'
        when 'X'
          '<x-gate data-hoverable></x-gate>'
        when 'P'
          '<phase-gate data-angle="π/2" data-hoverable></phase-gate>'
        when '•'
          '<control-gate data-hoverable></control-gate>'
        end
      end.map do |each|
        "<palette-dropzone>#{each}</palette-dropzone>"
      end.join

      palette_html = if gates.length.positive?
                       <<~HTML
                         <div
                           id="palette"
                           class="mb-10 flex w-min space-x-2 rounded-xl bg-white px-4 py-5 drop-shadow-xl"
                         >
                           #{gate_htmls}
                         </div>
                       HTML
                     else
                       ''
                     end

      <<~HTML
        <div class="flex flex-col">
          <div class="mini-qni">
            <quantum-simulator class="flex flex-col" data-service-worker="/serviceworker.js">
              <circuit-editor class="flex h-full w-full flex-col">
                #{palette_html}

                <div
                  class="absolute top-px right-px z-40 rounded-bl-2xl rounded-tr-md bg-white drop-shadow-2xl"
                >
                  <inspector-button
                    data-target="circuit-editor.inspectorButton"
                    class="inline-block h-10 w-10 p-1"
                  >
                    <div class="flex h-full w-full items-center justify-center rounded-xl hover:bg-zinc-200">
                      <svg class="text-zinc-700" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0505 9H5.5C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4H15.0505M8.94949 20H18.5C19.8807 20 21 18.8807 21 17.5C21 16.1193 19.8807 15 18.5 15H8.94949M3 17.5C3 19.433 4.567 21 6.5 21C8.433 21 10 19.433 10 17.5C10 15.567 8.433 14 6.5 14C4.567 14 3 15.567 3 17.5ZM21 6.5C21 8.433 19.433 10 17.5 10C15.567 10 14 8.433 14 6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </inspector-button>
                </div>

                <quantum-circuit
                  class="mb-10 self-center md:self-start"
                  data-target="quantum-simulator.circuit circuit-editor.circuit"
                  data-min-wire-count="1"
                  data-max-wire-count="2"
                  data-min-step-count="5"
                  data-json='#{json}'
                >
                </quantum-circuit>

                <circle-notation
                  id="circle-notation"
                  data-target="quantum-simulator.circleNotation"
                  data-qubit-circle-popup-template-id="qubit-circle-popup"
                  class="z-40 flex w-auto flex-row justify-center self-center rounded-xl bg-white drop-shadow-xl md:self-start"
                  data-padding-X="16"
                  data-padding-Y="20"
                >
                </circle-notation>
              </circuit-editor>
            </quantum-simulator>
          </div>
          <div class="md:mr-auto md:w-7/12 flex flex-row">
            <div class="bg-sky-500 px-4 py-2 rounded-b-md shrink">
              <a href="https://qniapp.net/#{URI.encode json}" target="_blank" class="block flex flex-row text-white no-underline">
                <span class="mr-2">Qniで開く</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      HTML
    end
  end
end

Liquid::Template.register_filter(Jekyll::MiniQniFilter)
