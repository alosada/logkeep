class CreateLogs < ActiveRecord::Migration
  def change
    create_table :logs do |t|
      t.string  :title
      t.text  :description
      t.boolean :open, default: true
      t.integer :user_id
      t.timestamps
    end
  end
end
