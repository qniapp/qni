# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  resources :circuits, only: %i[index]
  resources :circuit_previews, only: :show

  get '/new(/:json)', to: 'new_circuits#show', as: :new_circuit

  get '/', to: 'circuits#show'
  get '/:json', to: 'circuits#show', as: :circuit
end
