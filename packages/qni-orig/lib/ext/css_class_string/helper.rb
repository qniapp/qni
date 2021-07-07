module CssClassString
  class Helper
    def klasses
      @class_hash.filter_map { |((tc, fc), v)| v ? tc : fc }.sort
    end
  end
end
