class User < ActiveRecord::Base
  include BCrypt
  # Remember to create a migration!
  validates :name, :email, presence: true
  validates :email, uniqueness: true
  validates :password, confirmation: true
  has_many :logs
  #has_many :logs, through: :colaborators

    def password
      @password ||= Password.new(password_hash)
    end

    def password=(new_password)
      @password= Password.create(new_password)
      self.password_hash = @password
    end
end
