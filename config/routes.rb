Rails.application.routes.draw do
  root "home#index"
  get 'cat', to: "cat#index"
end
