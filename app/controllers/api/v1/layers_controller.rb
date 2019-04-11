module Api
  module V1
    class LayersController < ApplicationController
      def create
        layer = Layer.new(layer_params)
        if layer.save
          render json: layer, status: 201 # indicates successful resource creation
        else
          render json: { errors: layer.errors.full_messages }, status: :unprocessable_entity # status: 422
        end
      end

      def index
        render json: Layer.all
      end

      def show
        render json: Layer.find_by(id: params[:id]), status: 200
      end

      private

        def layer_params
          params.require(:layer).permit(:flavor, :pastry_part)
        end
    end
  end
end