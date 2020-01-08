class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.float :balance, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
