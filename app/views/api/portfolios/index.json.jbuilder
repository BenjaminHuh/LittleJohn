@portfolio_stocks.each do |stock|
  json.set! stock.id do
    json.extract! stock, :stock_id, :num_stocks
  end
end
