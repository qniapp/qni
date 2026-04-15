# frozen_string_literal: true

# Liquid 4.0.3 still expects Ruby's removed taint APIs.
# Ruby 4 no longer defines those methods, so we provide
# no-op shims to keep this docs site buildable on the
# repo's unified Ruby 4 toolchain.
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
