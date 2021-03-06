class GamesController < ApplicationController

    def app
        render component: 'App'
    end

    def index
        @games = Game.all
        render json: @games
    end

    def create
        @game = Game.new(game_params)
        if @game.save
            render json: @game
        else
            render json: {error: 400}
        end
    end

    def destroy
        @game = Game.find(params[:id]).destroy
        render json: @game
    end

    def update
        @game = Game.find(params[:id])

        if(@game.update(game_params))
            remder json: @game
        end
    end


    private

    def game_params

        params.require(:game).permit(:title, :genre, :likes)
    end
end
