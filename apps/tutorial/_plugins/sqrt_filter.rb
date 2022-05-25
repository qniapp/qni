# frozen_string_literal: true

module Jekyll
  module SqrtFilter
    def sqrt(input)
      Math.sqrt(input.to_f).to_s
    end
  end
end

Liquid::Template.register_filter(Jekyll::SqrtFilter)
