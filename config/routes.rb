Rails.application.routes.draw do
  resources :events
  resources :users, only: [:show, :create]

  # get '*path',
  #   to: 'fallback#index',
  #   constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"

  get "/users/:id/events", to: "users#user_events"
  patch "/users/:id", to: "users#update_user"

  get "/failsafe", to: "sessions#reset_session"
end
