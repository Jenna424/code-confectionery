module Api
  module V1
    class LayersController < ApplicationController
      def index
        render json: Layer.all
      end

      def batter_layers
        render json: Layer.batter
      end

      def filling_layers
        render json: Layer.filling
      end

      def frosting_layers
        render json: Layer.frosting
      end

      def show
        render json: Layer.find_by(id: params[:id]), status: 200
      end
    end
  end
end