require 'qni/json_parser'

class CircuitsController < ApplicationController
  before_action :set_circuit, only: [:show]

  def index
    @circuits = Circuit.all
  end

  def show; end

  private

  def set_circuit
    @circuit =
      Qni::JsonParser.new(params[:json] || '{"cols":[["|0>"],["H"],["Measure"]],"init":false}')
  end
end
