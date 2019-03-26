module Api
  module V1
    class CakesController < ApplicationController
      before_action :set_cake, only: [:show, :update, :destroy]

      def index
        render json: Cake.all
      end

      private

        def garden_params
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