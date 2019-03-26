module Api
  module V1
    class CakesController < ApplicationController
      before_action :set_cake, only: [:show, :update, :destroy]

      def index
        render json: Cake.all
      end

      def create
        cake = Cake.new(cake_params)
        if cake.save
          render json: cake, status: 201 # indicates successful resource creation
        else
          render json: { errors: cake.errors.full_messages }, status: :unprocessable_entity # status: 422
          # render json: { status: 500, error: 'Your cake was not saved successfully' }
        end
      end

      def show
        render json: @cake, status: 200
      end

      def update
        if @cake.update(cake_params)
          render json: @cake, status: 200
        else
          render json: { errors: @cake.errors.full_messages }, status: 400
        end
      end

      def destroy
        if @cake.destroy
          render json: { message: "Your cake was successfully deleted!" }, status: 200
        else
          render json: { errors: "Unable to delete the cake" }, status: 400
        end
      end

      private

        def set_cake
          @cake = Cake.find_by(id: params[:id])
        end

        def cake_params
          params.require(:cake).permit(
            :structure,
            :occasion,
            :width,
            :price,
            :img_url,
            :ordered,
            :flavor_combination,
            ingredient_ids: []
          )
        end
    end
  end
end