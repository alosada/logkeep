class Log < ActiveRecord::Base
  # Remember to create a migration!
  has_many :events
  belongs_to :user
  #has_many :users as: :colaborator, through: :colaborators
end
