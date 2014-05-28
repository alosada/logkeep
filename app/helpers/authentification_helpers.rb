helpers do

  def logged?
    if session[:token]
      return true
    else
      return false
    end
  end

  def authenticate(email,pw)
    if valid_login?(email)
      user=User.find_by_email(email)
      if user.password == params[:password]
        session[:id]=user.id
        session[:token] = SecureRandom.hex
      end
    else
      "Invalid email"
    end
  end

  def valid_login?(email)
    !Users.where(email: email).empty?
  end
end
