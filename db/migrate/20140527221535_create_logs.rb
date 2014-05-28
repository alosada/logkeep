class CreateLogs < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string  :title
      t.text  :description
      t.boolean :open
      t.date  :start_date
      t.date :end_date
      t.integer :user_id
      t.timestamps
    end
  end
end
