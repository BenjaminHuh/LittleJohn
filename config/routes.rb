Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :accounts, only: [:create, :index, :show]
      resources :portfolios, only: [:index, :show], param: :stock_id
      resources :watchlists, only: [:index, :show], param: :stock_id
      resources :summaries, only: [:index]
    end
    resources :stock_orders, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :stocks, only: [:show], param: :ticker
    resources :stocks, only: [:index]
    resources :news, only: [:show], param: :topic
    resources :summaries, only: [:create]
  end


  root 'static_pages#root'
end
