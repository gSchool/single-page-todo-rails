class CreateTodo < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :content
      t.boolean :completed

      t.timestamps
    end
  end
end
