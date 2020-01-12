Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :stocks, only: [:show], param: :ticker
    resources :stocks, only: [:index]
  end

  root 'static_pages#root'
end
