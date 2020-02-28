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

# Watchlist.delete_all
# watchlist1 = Watchlist.create!( user_id: user1.id )
# watchlist2 = Watchlist.create!( user_id: user2.id )


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

# Account Summary Seed for user_id: 1
Summary.delete_all
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-14", stocks: {}, close: 1800679.6057, total: 3724553.6057)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-15", stocks: {}, close: 1827551.28045, total: 3751425.28045)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-16", stocks: {}, close: 1834584.1882, total: 3758458.1881999997)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-17", stocks: {}, close: 1844520.9882000003, total: 3768394.9882000005)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-18", stocks: {}, close: 1819851.6680000003, total: 3743725.6680000005)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-21", stocks: {}, close: 1845096.2984, total: 3768970.2983999997)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-22", stocks: {}, close: 1831534.5787, total: 3755408.5787)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-23", stocks: {}, close: 1831425.9423, total: 3755299.9423)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-24", stocks: {}, close: 1868887.83325, total: 3792761.83325)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-25", stocks: {}, close: 1872293.2044999998, total: 3796167.2045)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-28", stocks: {}, close: 1887207.969, total: 3811081.969)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-29", stocks: {}, close: 1865788.97345, total: 3789662.97345)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-30", stocks: {}, close: 1878091.8212999997, total: 3801965.8213)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-10-31", stocks: {}, close: 1878781.8719999997, total: 3802655.8719999995)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-01", stocks: {}, close: 1897727.02955, total: 3821601.02955)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-04", stocks: {}, close: 1912420.0821, total: 3836294.0821)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-05", stocks: {}, close: 1910061.6986500002, total: 3833935.69865)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-06", stocks: {}, close: 1910701.3279000001, total: 3834575.3279)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-07", stocks: {}, close: 1913240.4057500002, total: 3837114.40575)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-08", stocks: {}, close: 1914701.6247499997, total: 3838575.6247499995)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-11", stocks: {}, close: 1909095.8151, total: 3832969.8151000002)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-12", stocks: {}, close: 1916327.9389999998, total: 3840201.939)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-13", stocks: {}, close: 1898724.05635, total: 3822598.05635)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-14", stocks: {}, close: 1900134.5224000004, total: 3824008.5224)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-15", stocks: {}, close: 1893640.1326999997, total: 3817514.1327)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-18", stocks: {}, close: 1904999.0383500003, total: 3828873.03835)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-19", stocks: {}, close: 1909465.5756500002, total: 3833339.57565)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-20", stocks: {}, close: 1896530.26625, total: 3820404.2662500003)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-21", stocks: {}, close: 1888953.08235, total: 3812827.08235)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-22", stocks: {}, close: 1887538.1337499998, total: 3811412.13375)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-25", stocks: {}, close: 1915148.8168, total: 3839022.8168)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-26", stocks: {}, close: 1927578.9232499998, total: 3851452.92325)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-27", stocks: {}, close: 1948468.0454000002, total: 3872342.0454)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-11-29", stocks: {}, close: 1933652.7939499998, total: 3857526.79395)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-02", stocks: {}, close: 1917729.7151000001, total: 3841603.7151)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-03", stocks: {}, close: 1903532.51985, total: 3827406.51985)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-04", stocks: {}, close: 1899162.24155, total: 3823036.24155)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-05", stocks: {}, close: 1886090.2793000003, total: 3809964.2793000005)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-06", stocks: {}, close: 1904039.5569000002, total: 3827913.5569)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-09", stocks: {}, close: 1900112.4586999998, total: 3823986.4587)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-10", stocks: {}, close: 1898100.0848499998, total: 3821974.0848499998)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-11", stocks: {}, close: 1908874.2746500003, total: 3832748.27465)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-12", stocks: {}, close: 1925612.0530999997, total: 3849486.0530999997)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-13", stocks: {}, close: 1927419.1289499998, total: 3851293.12895)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-16", stocks: {}, close: 1950317.32555, total: 3874191.32555)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-17", stocks: {}, close: 1965858.9107000004, total: 3889732.9107000004)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-18", stocks: {}, close: 1966480.51095, total: 3890354.51095)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-19", stocks: {}, close: 1978207.76915, total: 3902081.76915)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-20", stocks: {}, close: 1974555.1716999998, total: 3898429.1717)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-23", stocks: {}, close: 1989749.1573000003, total: 3913623.1573)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-24", stocks: {}, close: 1990521.3580500002, total: 3914395.35805)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-26", stocks: {}, close: 2059249.7330999998, total: 3983123.7331)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-27", stocks: {}, close: 2059661.45625, total: 3983535.45625)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-30", stocks: {}, close: 2034629.45225, total: 3958503.45225)
Summary.create(user_id: user1.id, balance: 1923874, date: "2019-12-31", stocks: {}, close: 2039735.8401000001, total: 3963609.8401)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-02", stocks: {}, close: 2091404.1650000003, total: 4015278.165)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-03", stocks: {}, close: 2075706.7101500004, total: 3999580.7101500006)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-06", stocks: {}, close: 2102449.77165, total: 4026323.77165)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-07", stocks: {}, close: 2110695.9018500005, total: 4034569.9018500005)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-08", stocks: {}, close: 2116443.04305, total: 4040317.04305)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-09", stocks: {}, close: 2123764.94455, total: 4047638.94455)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-10", stocks: {}, close: 2107926.3885000004, total: 4031800.3885000004)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-13", stocks: {}, close: 2143631.14425, total: 4067505.14425)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-14", stocks: {}, close: 2129443.8776499997, total: 4053317.8776499997)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-15", stocks: {}, close: 2111102.8699999996, total: 4034976.8699999996)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-16", stocks: {}, close: 2125720.08405, total: 4049594.08405)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-17", stocks: {}, close: 2117832.29615, total: 4041706.29615)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-21", stocks: {}, close: 2153466.6566, total: 4077340.6566)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-22", stocks: {}, close: 2161618.9625500003, total: 4085492.9625500003)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-23", stocks: {}, close: 2161609.7409, total: 4085483.7409)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-24", stocks: {}, close: 2136230.67765, total: 4060104.67765)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-27", stocks: {}, close: 2097614.1134, total: 4021488.1134)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-28", stocks: {}, close: 2131024.4886, total: 4054898.4886)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-29", stocks: {}, close: 2147039.9981, total: 4070913.9981)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-30", stocks: {}, close: 2189458.3463, total: 4113332.3463)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-01-31", stocks: {}, close: 2282601.74705, total: 4206475.74705)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-03", stocks: {}, close: 2345923.61345, total: 4269797.61345)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-04", stocks: {}, close: 2445529.051, total: 4369403.051)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-05", stocks: {}, close: 2365673.6351500005, total: 4289547.63515)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-06", stocks: {}, close: 2385096.4398000003, total: 4308970.4398)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-07", stocks: {}, close: 2402246.75355, total: 4326120.7535500005)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-10", stocks: {}, close: 2458143.2383, total: 4382017.238299999)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-11", stocks: {}, close: 2469554.30975, total: 4393428.30975)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-12", stocks: {}, close: 2479090.0594, total: 4402964.0594)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-13", stocks: {}, close: 2487641.46385, total: 4411515.46385)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-14", stocks: {}, close: 2474465.15295, total: 4398339.15295)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-18", stocks: {}, close: 2512837.4543, total: 4436711.454299999)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-19", stocks: {}, close: 2558920.96955, total: 4482794.9695500005)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-20", stocks: {}, close: 2533551.0523, total: 4457425.052300001)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-21", stocks: {}, close: 2482745.46695, total: 4406619.466949999)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-24", stocks: {}, close: 2365260.5134499995, total: 4289134.5134499995)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-25", stocks: {}, close: 2305998.9717999995, total: 4229872.9717999995)
Summary.create(user_id: user1.id, balance: 1923874, date: "2020-02-26", stocks: {}, close: 2303481.4619, total: 4227355.4618999995)
