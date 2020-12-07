Rails.application.routes.draw do
  # Api
  namespace 'api' do
    namespace 'v1' do
      resources :projects, only: %i[index create update destroy]
      resources :projects, param: :url, only: %i[show]
    end
  end

  # User
  get '/app', to: 'app#index'
  get '/app/*path', to: 'app#index'
  devise_for :users, skip: [:registrations, :sessions]
  devise_scope :user do
    get '/signup', to: 'users/registrations#new'
    post '/signup', to: 'users/registrations#create'
    get '/login', to: 'users/sessions#new'
    post '/login', to: 'users/sessions#create'
    delete '/logout', to: 'users/sessions#destroy'
  end
  root 'home#index'
end
