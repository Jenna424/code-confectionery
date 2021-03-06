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
        @cake.destroy
        render json: @cake, status: 200
      end

      private

        def set_cake
          @cake = Cake.find_by(id: params[:id])
        end

        def cake_params
          params.require(:cake).permit(
            :structure,
            :occasion,
            :flavor_combination,
            :diameter,
            :price,
            :customer,
            :name,
            :message,
            :garnish,
            :toppers,
            layer_ids: []
          )
        end
    end
  end
end