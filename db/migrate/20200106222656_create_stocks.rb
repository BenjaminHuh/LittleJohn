class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :ticker, null: false, unique: true
      t.string :name, null: false, unique: true      
      t.timestamps
    end
  end
end
