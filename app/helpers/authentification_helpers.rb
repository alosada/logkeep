helpers do

  def logged?
    if session[:id]
      return true
    else
      return false
    end
  end

  def authenticate(email,pw)
    if valid_login?(email)
      user=User.find_by_email(email)
      session[:id]=user.id if user.password == params[:password]
    end
  end

  def valid_login?(email)
    !User.where(email: email).empty?
  end

  def log_off
    session.clear
  end

end
