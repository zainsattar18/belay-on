Rails.application.routes.draw do
 
  
  resources :states, only: [:index, :show] do
    resources :climbs, only: [:index, :show, :create, :destroy] do 
      resources :reviews, only: [:index, :show, :create, :update, :destroy] do
        resources :photos, only: [:index, :show, :create, :destroy]
      end
    end
  end

  resources :users, only: :create 

  
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'


end
