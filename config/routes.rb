Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :stocks, only: [:show], param: :ticker
  end

  root 'static_pages#root'
end
