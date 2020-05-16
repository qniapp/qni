class CircuitPreviewsController < ApplicationController
  before_action :set_circuit, only: [:show]

  def show; end

  private

  def set_circuit
    @circuit = Circuit.find(params[:id])
  end
end
