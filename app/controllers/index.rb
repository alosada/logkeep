get '/' do
  if logged?
    @logs=Log.where(user_id:session[:id]).order(:created_at).reverse!
    erb :index
  else
    redirect '/login'
  end
end

get '/login' do
  erb :login
end

get '/logoff' do
  log_off
  redirect '/'
end

post '/users/create' do
    @user = User.new(params[:user])
    @user.password = params[:password]
    @user.email.downcase!
    if @user.save
      status 200
    else
      status 418
    end
    redirect '/'
end

post '/logs/create' do
  @log=Log.new(user_id: session[:id], title: params[:title], description: params[:description])
  if @log.save
    status 200
  else
    status 418
  end
  erb :_log, :layout => false
end

post '/events/create' do
  p params
  @eve=Event.new(user_id: session[:id], log_id: session[:log], title: params[:title], description: params[:description])
  if @eve.save
    p 'we have eve'
    status 200
  else
    status 418
  end
  #erb :_log, :layout => false
end

post '/kl-login' do
  authenticate(params[:email], params[:password])
  redirect to '/'
end

post '/logs/view' do
  @log=Log.find(params["id"])
  session[:log]=@log.id
  @events=@log.events
  erb :_viewlog, :layout => false
end

#### TEST ROUTS ###

get '/ses' do
  "#{session}"
end

get '/map' do
  erb :_map, :layout => false
end
