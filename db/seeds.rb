# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Required to Import JSON stock list 
# require 'json'

# Ticker and Company names

Stock.delete_all
stocks = JSON.parse(File.read("./db/stocks/NASDAQ-01-09-2020.json"))
stocks.each do |stock|
    Stock.create!(stock.slice("ticker", "name"))
end
    
# Demo user

User.delete_all
User.create( username: 'ladymarian', email: 'ladymarian@littlejohn.com', password: 'password' )


