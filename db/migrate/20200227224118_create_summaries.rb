class CreateSummaries < ActiveRecord::Migration[5.2]
  def change
    create_table :summaries do |t|
      t.integer :user_id
      t.float :balance
      t.string :date
      t.json :stocks
      t.float :close
      t.float :total
    end
  end
end
