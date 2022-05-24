# frozen_string_literal: true

module Jekyll
  class QubitCircleTag < Liquid::Tag
    def initialize(tag_name, options, tokens)
      super
      @options = parse_options(options)
    end

    def render(_context)
      <<~HTML
        <div class="flex w-20 flex-col items-start">
          <qubit-circle
            class="#{klass}"
            data-magnitude="#{@options[:magnitude] || 0}"
            data-qubit-circle-popup-template-id="circle-notation-popup"
            data-action="mouseenter:qubit-circle#showQubitCirclePopup mouseleave:qubit-circle#hideQubitCirclePopup"
          ></qubit-circle>
          <div class="-mt-3 flex w-full flex-row justify-end">
            <span class="font-mono text-slate-500">|#{@options[:ket]}⟩</span>
          </div>
        </div>
      HTML
    end

    private

    def parse_options(options)
      options.gsub("\n", '').split(/,\s*/).map do |each|
        case each.strip
        when /ket:\s*(\d+)/
          [:ket, Regexp.last_match(1).to_i]
        when /magnitude:\s*(\S+)/
          [:magnitude, Regexp.last_match(1).to_f]
        when /color:\s*(\S+)/
          [:color, Regexp.last_match(1)]
        end
      end.to_h
    end

    def klass
      @options[:color] ? "h-16 w-16 magnitude-#{@options[:color]}" : 'h-16 w-16'
    end
  end
end

Liquid::Template.register_tag('qubit_circle', Jekyll::QubitCircleTag)
