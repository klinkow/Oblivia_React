module Api::V1
  class ApiController < ApplicationController
    def index
      @games = Game.order("created_at DESC")
      render json: @games
    end
  end
end
