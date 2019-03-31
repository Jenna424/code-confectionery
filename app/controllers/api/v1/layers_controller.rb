module Api
  module V1
    class LayersController < ApplicationController
      def index
        render json: Layer.all
      end

      def show
        render json: Layer.find_by(id: params[:id]), status: 200
      end
    end
  end
end