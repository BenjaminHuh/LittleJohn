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
stocks_nasdaq = JSON.parse(File.read("./db/stocks/NASDAQ-01-09-2020.json"))
stocks_nasdaq.each do |stock|
    Stock.create!(stock.slice("ticker", "name"))
end

stocks_nyse = JSON.parse(File.read("./db/stocks/NYSE-01-09-2020.json"))
stocks_nyse.each do |stock|
    Stock.create!(stock.slice("ticker", "name"))
end

    
# Demo user

User.delete_all
user1 = User.create!( username: 'ladymarian', email: 'ladymarian@littlejohn.com', password: 'password', balance: 1923874.00 )
user2 = User.create!( username: 'jamie', email: 'jamie@littlejohn.com', password: 'password', balance: 239875297.00)


aapl = Stock.find_by_ticker('AAPL')
amd = Stock.find_by_ticker('AMD')
amzn = Stock.find_by_ticker('AMZN')
ba = Stock.find_by_ticker('BA')
baba = Stock.find_by_ticker('BABA')
jpm = Stock.find_by_ticker('JPM')
dis = Stock.find_by_ticker('DIS')
fb = Stock.find_by_ticker('FB')
msft = Stock.find_by_ticker('MSFT')
nflx = Stock.find_by_ticker('NFLX')
nvda = Stock.find_by_ticker('NVDA')
sq = Stock.find_by_ticker('SQ')
tsla = Stock.find_by_ticker('TSLA')
wfc = Stock.find_by_ticker('WFC')




Portfolio.delete_all
portfolio1 = Portfolio.create!( user_id: user1.id )
portfolio2 = Portfolio.create!( user_id: user2.id )

Watchlist.delete_all
watchlist1 = Watchlist.create!( user_id: user1.id )
watchlist2 = Watchlist.create!( user_id: user2.id )


StockOrder.delete_all
StockOrder.create!( user_id: user1.id, stock_id: aapl.id, num_stocks: 800)
StockOrder.create!( user_id: user1.id, stock_id: msft.id, num_stocks: 300)
StockOrder.create!( user_id: user1.id, stock_id: tsla.id, num_stocks: 500)
StockOrder.create!( user_id: user1.id, stock_id: wfc.id, num_stocks: 700)
StockOrder.create!( user_id: user1.id, stock_id: amzn.id, num_stocks: 300)
StockOrder.create!( user_id: user1.id, stock_id: amzn.id, num_stocks: 450)
StockOrder.create!( user_id: user1.id, stock_id: jpm.id, num_stocks: 700)
StockOrder.create!( user_id: user1.id, stock_id: dis.id, num_stocks: 200)


# StockOrder.create!( user_id: user1.id, stock_id: fb.id, num_stocks: 0 )
# StockOrder.create!( user_id: user1.id, stock_id: nflx.id, num_stocks: 0 )
# StockOrder.create!( user_id: user1.id, stock_id: sq.id, num_stocks: 0 )
# StockOrder.create!( user_id: user1.id, stock_id: nvda.id, num_stocks: 0 )

user1.watchlist = [fb.id, nflx.id, sq.id, nvda.id]
user1.save!

# StockOrder.delete_all
# StockOrder.create!( user_id: user1.id, portfolio_id: portfolio1.id, stock_id: aapl.id, num_stocks: 800)
# StockOrder.create!( user_id: user1.id, portfolio_id: portfolio1.id, stock_id: msft.id, num_stocks: 300)
# StockOrder.create!( user_id: user1.id, portfolio_id: portfolio1.id, stock_id: tsla.id, num_stocks: 500)
# StockOrder.create!( user_id: user1.id, portfolio_id: portfolio1.id, stock_id: wf.id, num_stocks: 700)
# StockOrder.create!( user_id: user1.id, portfolio_id: portfolio1.id, stock_id: amzn.id, num_stocks: 300)
# StockOrder.create!( user_id: user1.id, portfolio_id: portfolio1.id, stock_id: coke.id, num_stocks: 700)
# StockOrder.create!( user_id: user1.id, portfolio_id: portfolio1.id, stock_id: dis.id, num_stocks: 200)


# StockOrder.create!( user_id: user1.id, watchlist_id: watchlist1.id, stock_id: fb.id, num_stocks: 0 )
# StockOrder.create!( user_id: user1.id, watchlist_id: watchlist1.id, stock_id: nflx.id, num_stocks: 0 )
# StockOrder.create!( user_id: user1.id, watchlist_id: watchlist1.id, stock_id: sq.id, num_stocks: 0 )
# StockOrder.create!( user_id: user1.id, watchlist_id: watchlist1.id, stock_id: nvda.id, num_stocks: 0 )


