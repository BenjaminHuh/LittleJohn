#// json.extract! @stock, :id, :ticker, :name
# json.merge! @stock_info
json.symbol @ticker
json.set! "data" do
    json.merge! @stock_info
end