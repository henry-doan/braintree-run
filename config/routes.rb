Rails.application.routes.draw do
  namespace :api do
    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
  end
end
