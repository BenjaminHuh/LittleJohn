@watchlist.each do |stock|
  json.set! stock.id do
    json.extract! stock, :ticker, :name
  end
end