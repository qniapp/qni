# frozen_string_literal: true

# Liquid 4.0.3, which is pinned by github-pages 223, still expects Ruby's
# removed taint APIs. Ruby 4 no longer defines those methods, so we provide
# no-op shims to keep the tutorial site buildable without moving off the
# current GitHub Pages gem line in this migration.
unless ''.respond_to?(:tainted?)
  class Object
    def tainted?
      false
    end

    def untaint
      self
    end
  end
end
