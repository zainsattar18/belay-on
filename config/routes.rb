Rails.application.routes.draw do
  resources :states, only: [:index, :show] do
    resources :climbs, only: [:index, :show, :create, :destroy] do
      resources :reviews, except: [:create, :update, :destroy] do
        resources :photos, only: [:index, :show, :create, :destroy]
      end
    end
  end

  resources :users, only: :create

  resources :climbs, only: [:show] do 
    resources :reviews, only: [:create]
  end

  resources :reviews, only: [:update, :destroy]

  post "/auth/login", to: "authentication#login"
  get "/auth/verify", to: "authentication#verify"
end
