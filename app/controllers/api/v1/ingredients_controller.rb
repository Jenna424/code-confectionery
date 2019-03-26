module Api
  module V1
    class IngredientsController < ApplicationController
      def index
        render json: Ingredient.all
      end

      def show
        render json: Ingredient.find_by(id: params[:id]), status: 200
      end
    end
  end
end