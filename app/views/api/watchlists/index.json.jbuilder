@watchlist.each do |stock|
  json.set! stock.stock_id do
    json.extract! stock, :stock_id, :num_stocks
  end
end