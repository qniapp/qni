# frozen_string_literal: true

class CircuitsController < ApplicationController
  include Jsonnable

  def index; end

  def show
    return unless valid_json?(params[:json])

    @json = params[:json]
    @circuit = Circuit.find_or_create_by(json: @json)
  end
end
