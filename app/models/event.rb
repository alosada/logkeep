class Event < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :log
  belongs_to :user
end
