# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root 'circuits#index'
  resources :circuits, only: %i[index show]
  resources :circuit_previews, only: :show

  namespace :admin do
    resources :circuits
    root to: 'circuits#index'
  end
end
