Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cakes, except: [:new, :edit]
      resources :ingredients, except: [:new, :edit]
    end
  end
end
