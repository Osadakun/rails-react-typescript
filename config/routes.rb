Rails.application.routes.draw do
  get 'cat', to: "cat#index"
  get "sample", to: "sample#index"
end
