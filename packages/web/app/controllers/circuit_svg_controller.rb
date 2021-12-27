# frozen_string_literal: true

class CircuitSvgController < ApplicationController
  include Jsonnable

  def show
    @json = params[:json]
    raise "Invalid JSON: #{@json}" unless valid_json?(@json)
  end
end
