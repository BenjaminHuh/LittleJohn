class AddColumnToSumariesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :summaries, :total, :float
    change_column :summaries, :balance, :float
    change_column :summaries, :close, :float
  end
end
