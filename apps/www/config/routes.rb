# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  resources :circuits, only: %i[index] if Rails.env.development?

  get '/cirq/(:json)', to: 'cirq#show', as: :cirq
  get '/backend', to: 'backend#show'

  get 'svg/(:json)', to: 'circuit_svg#show', as: :circuit_svg, constraints: { json: /.*/ }
  get '/(:json)', to: 'circuits#show', as: :circuit, constraints: { json: /.*/ }
end
