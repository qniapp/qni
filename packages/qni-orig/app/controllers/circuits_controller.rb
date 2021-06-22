class CircuitsController < ApplicationController
  before_action :set_circuit, only: [:show]

  def index
    @circuits = Circuit.all
  end

  def show; end

  private

  def set_circuit
    @circuit =
      if params[:id]
        Circuit.find(params[:id])
      else
        Circuit.find_by(name: 'Random bit')
      end
  end
end
