class CreateEvents < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string  :title
      t.text  :description
      t.boolean :open
      t.datetime  :start_time
      t.datetime :end_time
      t.integer :user_id
      t.timestamps
    end
  end
end
