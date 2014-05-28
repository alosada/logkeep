get '/' do
  erb :index
end

post '/users/create' do
  p params
    @user = User.new(params[:user])
    @user.password = params[:password]
    @user.save!
  redirect '/'
end

post '/google_login' do
  session[:token] = params[:token]
end

#### TEST ROUTS ###

get '/logoff' do
  session.clear
  redirect '/'
end


get '/ses' do
  session[:token]
end
