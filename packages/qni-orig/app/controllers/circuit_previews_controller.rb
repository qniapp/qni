require 'qni/json_parser'

class CircuitPreviewsController < ApplicationController
  before_action :set_circuit, only: [:show]

  def show; end

  private

  def set_circuit
    @circuit =
      Qni::JsonParser.new(Circuit.find(params[:id]).json)
  end
end
