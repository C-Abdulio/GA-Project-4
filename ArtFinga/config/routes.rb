Rails.application.routes.draw do
  # resources :gallery_publics
  resources :artworks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
end
