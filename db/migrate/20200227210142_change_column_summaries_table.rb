class ChangeColumnSummariesTable < ActiveRecord::Migration[5.2]
  def change
    change_column :summaries, :stocks, :json, using: 'stocks::JSON'
  end
end
