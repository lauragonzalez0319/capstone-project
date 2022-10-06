Rails.application.routes.draw do
  resources :educational_insight_favorites, only: [:index, :create, :destroy]
  resources :educational_insights, only: [:index, :show]
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

  get "/educational_insight_favorites/:id", to: "educational_insight_favorites#index"
  delete "/educational_insight_favorites/:id", to: "educational_insight_favorites#destroy"

  get "/failsafe", to: "sessions#reset_session"
end
