# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  resources :circuits, only: %i[index]

  get '/(:json)', to: 'circuits#show', as: :circuit
end
