Rails.application.routes.draw do
  # resources :photos
  
  resources :states, only: [:index, :show] do
    resources :climbs, only: [:index, :show] do 
      resources :reviews do
        resources :photos, only: [:index, :show, :create, :destroy]
      end
    end
  end

  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'


end
