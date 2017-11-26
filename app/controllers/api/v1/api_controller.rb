module Api::V1
  class ApiController < ApplicationController
    def index
      @games = Game.order("created_at DESC")
      render json: @games
    end

    def new
      @game = Idea.create()
      render json: @game
    end

    def update
      @idea = Idea.find(params[:id])
      @idea.update_attributes(idea_params)
      render json: @idea
    end

  end
end
