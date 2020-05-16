class CircuitsController < ApplicationController
  before_action :set_circuit, only: [:show]

  def index
    @circuits = Circuit.all
  end

  def show; end

  private

  def set_circuit
    @circuit = Circuit.find(params[:id])
  end
end
