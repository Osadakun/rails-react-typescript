Rails.application.routes.draw do
  get 'cat', to: "cat#index"
  get "", to: "home#index"
end
