Rails.application.routes.draw do
  get 'contact/index'
  get 'tracker/index'
  root 'landing_page#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
