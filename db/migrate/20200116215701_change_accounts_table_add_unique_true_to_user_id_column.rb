class ChangeAccountsTableAddUniqueTrueToUserIdColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :accounts, :user_id, unique: true
  end
end
